alter table public.profiles
  add column if not exists birth_date date,
  add column if not exists desired_positions text[] not null default '{}'::text[],
  add column if not exists uniform_number text not null default '',
  add column if not exists experience_years integer not null default 0 check (experience_years between 0 and 60),
  add column if not exists is_former_player boolean not null default false,
  add column if not exists profile_complete boolean not null default false;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_username text := lower(trim(coalesce(new.raw_user_meta_data ->> 'username', '')));
  v_name text := trim(coalesce(new.raw_user_meta_data ->> 'full_name', ''));
  v_nickname text := trim(coalesce(new.raw_user_meta_data ->> 'nickname', ''));
  v_invite_code text := trim(coalesce(new.raw_user_meta_data ->> 'invite_code', ''));
  v_invite public.team_invites%rowtype;
begin
  if v_username !~ '^[a-z0-9_]{3,20}$' then raise exception 'INVALID_USERNAME'; end if;
  if char_length(v_name) not between 1 and 20 then raise exception 'INVALID_NAME'; end if;
  if char_length(v_nickname) not between 1 and 16 then raise exception 'INVALID_NICKNAME'; end if;

  if v_invite_code <> '' then
    select * into v_invite
    from public.team_invites
    where code_hash = public.invite_code_hash(v_invite_code)
      and active and expires_at > now() and uses_count < max_uses
    for update;
    if v_invite.id is null then raise exception 'INVALID_INVITE'; end if;
  end if;

  insert into public.profiles (id, username, full_name, nickname, is_platform_host)
  values (new.id, v_username, v_name, v_nickname, coalesce(v_invite.role = 'host', false));

  if v_invite.id is not null then
    insert into public.team_members (team_id, user_id, role)
    values (v_invite.team_id, new.id, v_invite.role);
    update public.team_invites
    set uses_count = uses_count + 1,
        active = case when uses_count + 1 >= max_uses then false else active end
    where id = v_invite.id;
    if v_invite.role = 'host' then
      update public.team_invites set active = false
      where team_id = v_invite.team_id and role = 'host';
    end if;
    insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
    values (v_invite.team_id, new.id, new.id, 'account_joined', jsonb_build_object('role', v_invite.role));
  end if;
  return new;
end;
$$;

create or replace function public.update_player_profile(
  p_full_name text,
  p_nickname text,
  p_birth_date date,
  p_desired_positions text[],
  p_uniform_number text,
  p_experience_years integer,
  p_is_former_player boolean
)
returns public.profiles
language plpgsql
security definer
set search_path = public
as $$
declare v_profile public.profiles;
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if char_length(trim(p_full_name)) not between 1 and 20 then raise exception 'INVALID_NAME'; end if;
  if char_length(trim(p_nickname)) not between 1 and 16 then raise exception 'INVALID_NICKNAME'; end if;
  if p_birth_date is null or p_birth_date > current_date then raise exception 'INVALID_BIRTH_DATE'; end if;
  if coalesce(array_length(p_desired_positions, 1), 0) < 1 then raise exception 'POSITION_REQUIRED'; end if;
  if trim(p_uniform_number) !~ '^[0-9]{1,3}$' then raise exception 'INVALID_NUMBER'; end if;
  if p_experience_years not between 0 and 60 then raise exception 'INVALID_EXPERIENCE'; end if;

  update public.profiles
  set full_name = trim(p_full_name), nickname = trim(p_nickname), birth_date = p_birth_date,
      desired_positions = p_desired_positions, uniform_number = trim(p_uniform_number),
      experience_years = p_experience_years, is_former_player = p_is_former_player,
      profile_complete = true, updated_at = now()
  where id = auth.uid() and status = 'active'
  returning * into v_profile;

  update public.team_players
  set name = v_profile.full_name,
      number = case
        when not exists (
          select 1 from public.team_players other
          where other.team_id = team_players.team_id
            and other.id <> team_players.id
            and other.number = v_profile.uniform_number
            and other.active
        ) then v_profile.uniform_number
        else team_players.number
      end,
      primary_position = v_profile.desired_positions[1],
      possible_positions = v_profile.desired_positions,
      updated_at = now()
  where linked_user_id = auth.uid();
  return v_profile;
end;
$$;

create or replace function public.join_team_by_code(p_code text)
returns table(team_id uuid, slug text, name text, role text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_invite public.team_invites%rowtype;
  v_team public.teams%rowtype;
  v_profile public.profiles%rowtype;
  v_number text;
begin
  select * into v_profile from public.profiles
  where id = auth.uid() and status = 'active' and profile_complete;
  if v_profile.id is null then raise exception 'PROFILE_REQUIRED'; end if;

  select * into v_invite from public.team_invites
  where code_hash = public.invite_code_hash(p_code)
    and active and expires_at > now() and uses_count < max_uses
  for update;
  if v_invite.id is null then raise exception 'INVALID_INVITE'; end if;

  select * into v_team from public.teams where id = v_invite.team_id and setup_complete;
  if v_team.id is null then raise exception 'TEAM_NOT_READY'; end if;
  if exists (select 1 from public.team_members tm where tm.team_id = v_team.id and tm.user_id = auth.uid()) then
    raise exception 'ALREADY_MEMBER';
  end if;

  insert into public.team_members (team_id, user_id, role)
  values (v_team.id, auth.uid(), v_invite.role);
  update public.team_invites
  set uses_count = uses_count + 1,
      active = case when uses_count + 1 >= max_uses then false else active end
  where id = v_invite.id;

  v_number := v_profile.uniform_number;
  if exists (select 1 from public.team_players tp where tp.team_id = v_team.id and tp.number = v_number and tp.active) then
    v_number := '';
  end if;
  insert into public.team_players (
    team_id, linked_user_id, name, number, primary_position,
    possible_positions, source, created_by
  ) values (
    v_team.id, auth.uid(), v_profile.full_name, v_number,
    v_profile.desired_positions[1], v_profile.desired_positions, 'account', auth.uid()
  ) on conflict do nothing;

  insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
  values (v_team.id, auth.uid(), auth.uid(), 'account_joined', jsonb_build_object('role', v_invite.role));
  return query select v_team.id, v_team.slug, v_team.name, v_invite.role;
end;
$$;

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
  select * into v_profile from public.profiles
  where id = auth.uid() and status = 'active' and profile_complete;
  if v_profile.id is null then raise exception 'PROFILE_REQUIRED'; end if;
  if not v_profile.is_platform_host then raise exception 'HOST_REQUIRED'; end if;
  if char_length(trim(p_name)) not between 2 and 40 then raise exception 'INVALID_TEAM_NAME'; end if;

  select t.* into v_team from public.teams t
  join public.team_members tm on tm.team_id = t.id
  where tm.user_id = auth.uid() and tm.role = 'host' and not t.setup_complete
  order by t.created_at limit 1 for update;
  v_slug := 'team-' || lower(substr(encode(gen_random_bytes(8), 'hex'), 1, 12));

  if v_team.id is null then
    insert into public.teams (slug, name, created_by, setup_complete)
    values (v_slug, trim(p_name), auth.uid(), true) returning * into v_team;
    insert into public.team_members (team_id, user_id, role)
    values (v_team.id, auth.uid(), 'host');
  else
    update public.teams set slug=v_slug, name=trim(p_name), created_by=auth.uid(), setup_complete=true
    where id=v_team.id returning * into v_team;
  end if;

  insert into public.team_players (
    team_id, linked_user_id, name, number, primary_position,
    possible_positions, source, created_by
  ) values (
    v_team.id, auth.uid(), v_profile.full_name, v_profile.uniform_number,
    v_profile.desired_positions[1], v_profile.desired_positions, 'account', auth.uid()
  ) on conflict do nothing;
  insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
  values (v_team.id, auth.uid(), auth.uid(), 'team_room_created', jsonb_build_object('name', v_team.name));
  return query select v_team.id, v_team.slug, v_team.name;
end;
$$;

grant execute on function public.update_player_profile(text,text,date,text[],text,integer,boolean) to authenticated;
grant execute on function public.join_team_by_code(text) to authenticated;
grant execute on function public.create_team_room(text) to authenticated;
