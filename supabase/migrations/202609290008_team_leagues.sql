create table if not exists public.team_leagues (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.teams(id) on delete cascade,
  league_key text not null,
  name text not null,
  season text not null,
  active boolean not null default true,
  created_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (team_id, league_key),
  check (char_length(league_key) between 1 and 80),
  check (char_length(name) between 2 and 80),
  check (char_length(season) between 1 and 80)
);

create index if not exists team_leagues_team_active_idx
  on public.team_leagues (team_id, active, created_at);

alter table public.team_leagues enable row level security;
revoke all on public.team_leagues from anon, authenticated;

create or replace function public.create_team_league(
  p_team_id uuid,
  p_name text,
  p_season text
)
returns table(league_key text, league_name text, season_name text)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_key text;
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if not exists (
    select 1
    from public.team_members tm
    join public.profiles p on p.id = tm.user_id
    where tm.team_id = p_team_id
      and tm.user_id = auth.uid()
      and tm.role in ('host', 'admin')
      and tm.status = 'active'
      and p.status = 'active'
  ) then raise exception 'NOT_AUTHORIZED'; end if;
  if char_length(trim(p_name)) not between 2 and 80 then raise exception 'INVALID_LEAGUE_NAME'; end if;
  if char_length(trim(p_season)) not between 1 and 80 then raise exception 'INVALID_SEASON'; end if;

  v_key := 'league-' || lower(substr(encode(gen_random_bytes(8), 'hex'), 1, 12));
  insert into public.team_leagues (team_id, league_key, name, season, created_by)
  values (p_team_id, v_key, trim(p_name), trim(p_season), auth.uid());

  insert into public.account_audit_log (team_id, actor_id, action, details)
  values (p_team_id, auth.uid(), 'team_league_created', jsonb_build_object('league_key', v_key, 'name', trim(p_name)));

  return query select v_key, trim(p_name), trim(p_season);
end;
$$;

create or replace function public.list_team_leagues(p_team_id uuid)
returns table(league_key text, league_name text, season_name text, created_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if not exists (
    select 1
    from public.team_members tm
    join public.profiles p on p.id = tm.user_id
    where tm.team_id = p_team_id
      and tm.user_id = auth.uid()
      and tm.status = 'active'
      and p.status = 'active'
  ) then raise exception 'NOT_AUTHORIZED'; end if;

  return query
  select league.league_key, league.name, league.season, league.created_at
  from public.team_leagues league
  where league.team_id = p_team_id and league.active
  order by league.created_at, league.name;
end;
$$;

grant execute on function public.create_team_league(uuid,text,text) to authenticated;
grant execute on function public.list_team_leagues(uuid) to authenticated;

create or replace function public.set_team_member_role(p_team_id uuid, p_user_id uuid, p_role text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_my_role text;
  v_target_role text;
  v_editor_count integer;
begin
  select role into v_my_role from public.team_members
  where team_id = p_team_id and user_id = auth.uid() and status = 'active';
  select role into v_target_role from public.team_members
  where team_id = p_team_id and user_id = p_user_id;

  if v_my_role not in ('host', 'admin') then raise exception 'NOT_AUTHORIZED'; end if;
  if p_role not in ('admin', 'manager', 'scorer', 'member') then raise exception 'INVALID_ROLE'; end if;
  if v_target_role is null then raise exception 'MEMBER_NOT_FOUND'; end if;
  if v_target_role = 'host' then raise exception 'HOST_ROLE_LOCKED'; end if;
  if v_my_role = 'admin' and (v_target_role = 'admin' or p_role = 'admin') then raise exception 'HOST_REQUIRED'; end if;

  if p_role in ('admin', 'manager', 'scorer') and v_target_role not in ('admin', 'manager', 'scorer') then
    select count(*) into v_editor_count
    from public.team_members
    where team_id = p_team_id and status = 'active' and role in ('admin', 'manager', 'scorer');
    if v_editor_count >= 5 then raise exception 'MAX_EDITORS_REACHED'; end if;
  end if;

  update public.team_members set role = p_role
  where team_id = p_team_id and user_id = p_user_id;

  insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
  values (p_team_id, auth.uid(), p_user_id, 'member_role_changed', jsonb_build_object('from', v_target_role, 'to', p_role));
end;
$$;

grant execute on function public.set_team_member_role(uuid,uuid,text) to authenticated;
