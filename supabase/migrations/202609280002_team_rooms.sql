alter table public.teams
  add column if not exists created_by uuid references public.profiles(id) on delete set null,
  add column if not exists setup_complete boolean not null default false;

create table if not exists public.team_players (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.teams(id) on delete cascade,
  linked_user_id uuid references public.profiles(id) on delete set null,
  name text not null check (char_length(trim(name)) between 1 and 30),
  number text not null default '' check (char_length(number) <= 3),
  primary_position text not null default '미정',
  possible_positions text[] not null default '{}'::text[],
  throws text not null default '우투' check (throws in ('우투', '좌투')),
  bats text not null default '우타' check (bats in ('우타', '좌타', '양타')),
  source text not null default 'manual' check (source in ('account', 'manual')),
  active boolean not null default true,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists team_players_linked_user_key
  on public.team_players (team_id, linked_user_id)
  where linked_user_id is not null;

create unique index if not exists team_players_number_key
  on public.team_players (team_id, number)
  where number <> '' and active;

create or replace function public.create_team_room(p_name text)
returns table(team_id uuid, slug text, name text)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_team public.teams%rowtype;
  v_slug text;
  v_profile public.profiles%rowtype;
begin
  select * into v_profile from public.profiles where id = auth.uid() and status = 'active';
  if v_profile.id is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if not v_profile.is_platform_host then raise exception 'HOST_REQUIRED'; end if;
  if char_length(trim(p_name)) not between 2 and 40 then raise exception 'INVALID_TEAM_NAME'; end if;

  select t.* into v_team
  from public.teams t
  join public.team_members tm on tm.team_id = t.id
  where tm.user_id = auth.uid()
    and tm.role = 'host'
    and not t.setup_complete
  order by t.created_at
  limit 1
  for update;

  v_slug := 'team-' || lower(substr(encode(gen_random_bytes(8), 'hex'), 1, 12));

  if v_team.id is null then
    insert into public.teams (slug, name, created_by, setup_complete)
    values (v_slug, trim(p_name), auth.uid(), true)
    returning * into v_team;

    insert into public.team_members (team_id, user_id, role)
    values (v_team.id, auth.uid(), 'host');
  else
    update public.teams
    set slug = v_slug,
        name = trim(p_name),
        created_by = auth.uid(),
        setup_complete = true
    where id = v_team.id
    returning * into v_team;
  end if;

  insert into public.team_players (
    team_id, linked_user_id, name, primary_position,
    possible_positions, source, created_by
  ) values (
    v_team.id, auth.uid(), v_profile.full_name, '미정',
    '{}'::text[], 'account', auth.uid()
  ) on conflict (team_id, linked_user_id) where linked_user_id is not null do nothing;

  insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
  values (v_team.id, auth.uid(), auth.uid(), 'team_room_created', jsonb_build_object('name', v_team.name));

  return query select v_team.id, v_team.slug, v_team.name;
end;
$$;

create or replace function public.add_manual_team_player(
  p_team_id uuid,
  p_name text,
  p_number text,
  p_primary_position text,
  p_possible_positions text[],
  p_throws text,
  p_bats text
)
returns public.team_players
language plpgsql
security definer
set search_path = public
as $$
declare
  v_player public.team_players;
begin
  if not public.is_team_manager(p_team_id) then raise exception 'NOT_AUTHORIZED'; end if;
  if char_length(trim(p_name)) not between 1 and 30 then raise exception 'INVALID_PLAYER_NAME'; end if;
  if char_length(trim(p_number)) not between 1 and 3 then raise exception 'INVALID_NUMBER'; end if;
  if p_throws not in ('우투', '좌투') then raise exception 'INVALID_THROWS'; end if;
  if p_bats not in ('우타', '좌타', '양타') then raise exception 'INVALID_BATS'; end if;

  insert into public.team_players (
    team_id, name, number, primary_position, possible_positions,
    throws, bats, source, created_by
  ) values (
    p_team_id, trim(p_name), trim(p_number), p_primary_position,
    coalesce(p_possible_positions, '{}'::text[]), p_throws, p_bats,
    'manual', auth.uid()
  ) returning * into v_player;

  insert into public.account_audit_log (team_id, actor_id, action, details)
  values (p_team_id, auth.uid(), 'manual_player_added', jsonb_build_object('player_id', v_player.id, 'name', v_player.name));

  return v_player;
end;
$$;

create or replace function public.list_team_players(p_team_id uuid)
returns setof public.team_players
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1 from public.team_members
    where team_id = p_team_id and user_id = auth.uid() and status = 'active'
  ) then raise exception 'NOT_AUTHORIZED'; end if;

  return query
    select * from public.team_players
    where team_id = p_team_id and active
    order by case when number ~ '^[0-9]+$' then number::integer else 9999 end, name;
end;
$$;

drop function if exists public.create_team_invite(text, integer, integer);
create or replace function public.create_team_invite(
  p_team_id uuid,
  p_role text default 'member',
  p_expires_days integer default 30,
  p_max_uses integer default 1
)
returns table(code text, expires_at timestamptz, max_uses integer, role text)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_code text;
  v_expires_at timestamptz;
  v_caller_role text;
  v_editor_count integer;
  v_reserved_editor_slots integer;
begin
  select tm.role into v_caller_role
  from public.team_members tm
  where tm.team_id = p_team_id and tm.user_id = auth.uid() and tm.status = 'active';
  if v_caller_role not in ('host', 'admin', 'manager') then raise exception 'NOT_AUTHORIZED'; end if;
  if p_role not in ('admin', 'manager', 'scorer', 'member') then raise exception 'INVALID_ROLE'; end if;
  if v_caller_role = 'manager' and p_role in ('admin', 'manager') then raise exception 'NOT_AUTHORIZED'; end if;
  if v_caller_role = 'admin' and p_role = 'admin' then raise exception 'HOST_REQUIRED'; end if;
  if p_expires_days not between 1 and 90 then raise exception 'INVALID_EXPIRY'; end if;
  if p_max_uses not between 1 and 20 then raise exception 'INVALID_USES'; end if;

  if p_role in ('admin', 'manager', 'scorer') then
    select count(*) into v_editor_count from public.team_members
    where team_id = p_team_id and role in ('admin', 'manager', 'scorer') and status = 'active';
    select coalesce(sum(max_uses - uses_count), 0) into v_reserved_editor_slots
    from public.team_invites
    where team_id = p_team_id and role in ('admin', 'manager', 'scorer')
      and active and expires_at > now() and uses_count < max_uses;
    if v_editor_count + v_reserved_editor_slots + p_max_uses > 5 then
      raise exception 'MAX_EDITORS_REACHED';
    end if;
  end if;

  v_code := 'BBAT-' || upper(substr(encode(gen_random_bytes(8), 'hex'), 1, 12));
  v_expires_at := now() + make_interval(days => p_expires_days);
  insert into public.team_invites (team_id, code_hash, role, max_uses, expires_at, created_by)
  values (p_team_id, public.invite_code_hash(v_code), p_role, p_max_uses, v_expires_at, auth.uid());
  return query select v_code, v_expires_at, p_max_uses, p_role;
end;
$$;

drop function if exists public.list_team_members();
create or replace function public.list_team_members(p_team_id uuid)
returns table(
  user_id uuid, username text, full_name text, nickname text,
  role text, status text, joined_at timestamptz, must_change_password boolean
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_team_manager(p_team_id) then raise exception 'NOT_AUTHORIZED'; end if;
  return query
    select p.id, p.username, p.full_name, p.nickname, tm.role, tm.status,
           tm.joined_at, p.must_change_password
    from public.team_members tm join public.profiles p on p.id = tm.user_id
    where tm.team_id = p_team_id
    order by case tm.role when 'host' then 0 when 'admin' then 1 when 'manager' then 2 when 'scorer' then 3 else 4 end, p.full_name;
end;
$$;

drop function if exists public.set_team_member_role(uuid, text);
create or replace function public.set_team_member_role(p_team_id uuid, p_user_id uuid, p_role text)
returns void language plpgsql security definer set search_path = public as $$
declare v_my_role text; v_target_role text;
begin
  select role into v_my_role from public.team_members where team_id=p_team_id and user_id=auth.uid() and status='active';
  select role into v_target_role from public.team_members where team_id=p_team_id and user_id=p_user_id;
  if v_my_role not in ('host','admin') then raise exception 'NOT_AUTHORIZED'; end if;
  if p_role not in ('admin','manager','scorer','member') then raise exception 'INVALID_ROLE'; end if;
  if v_target_role='host' then raise exception 'HOST_ROLE_LOCKED'; end if;
  if v_my_role='admin' and (v_target_role='admin' or p_role='admin') then raise exception 'HOST_REQUIRED'; end if;
  update public.team_members set role=p_role where team_id=p_team_id and user_id=p_user_id;
end; $$;

drop function if exists public.set_team_member_status(uuid, text);
create or replace function public.set_team_member_status(p_team_id uuid, p_user_id uuid, p_status text)
returns void language plpgsql security definer set search_path = public as $$
declare v_my_role text; v_target_role text;
begin
  select role into v_my_role from public.team_members where team_id=p_team_id and user_id=auth.uid() and status='active';
  select role into v_target_role from public.team_members where team_id=p_team_id and user_id=p_user_id;
  if v_my_role not in ('host','admin') then raise exception 'NOT_AUTHORIZED'; end if;
  if p_status not in ('active','suspended') then raise exception 'INVALID_STATUS'; end if;
  if v_target_role='host' or p_user_id=auth.uid() then raise exception 'PROTECTED_ACCOUNT'; end if;
  if v_my_role='admin' and v_target_role='admin' then raise exception 'HOST_REQUIRED'; end if;
  update public.team_members set status=p_status where team_id=p_team_id and user_id=p_user_id;
  update public.profiles set status=p_status,updated_at=now() where id=p_user_id;
end; $$;

alter table public.team_players enable row level security;
drop policy if exists team_players_select on public.team_players;
create policy team_players_select on public.team_players for select to authenticated
using (exists (select 1 from public.team_members tm where tm.team_id=team_players.team_id and tm.user_id=auth.uid() and tm.status='active'));
drop policy if exists team_players_manage on public.team_players;
create policy team_players_manage on public.team_players for all to authenticated
using (public.is_team_manager(team_id)) with check (public.is_team_manager(team_id));

grant select on public.team_players to authenticated;
grant execute on function public.create_team_room(text) to authenticated;
grant execute on function public.add_manual_team_player(uuid,text,text,text,text[],text,text) to authenticated;
grant execute on function public.list_team_players(uuid) to authenticated;
grant execute on function public.create_team_invite(uuid,text,integer,integer) to authenticated;
grant execute on function public.list_team_members(uuid) to authenticated;
grant execute on function public.set_team_member_role(uuid,uuid,text) to authenticated;
grant execute on function public.set_team_member_status(uuid,uuid,text) to authenticated;
