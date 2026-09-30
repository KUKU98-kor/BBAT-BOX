create table if not exists public.team_join_requests (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.teams(id) on delete cascade,
  invite_id uuid references public.team_invites(id) on delete set null,
  user_id uuid not null references public.profiles(id) on delete cascade,
  requested_role text not null default 'member'
    check (requested_role in ('admin', 'manager', 'scorer', 'member')),
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected')),
  requested_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references public.profiles(id) on delete set null,
  unique (team_id, user_id)
);

create index if not exists team_join_requests_pending_idx
  on public.team_join_requests (team_id, status, requested_at);

alter table public.team_join_requests enable row level security;
revoke all on public.team_join_requests from anon, authenticated;

drop function if exists public.join_team_by_code(text);
create or replace function public.join_team_by_code(p_code text)
returns table(
  team_id uuid,
  slug text,
  name text,
  role text,
  request_id uuid,
  request_status text
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_invite public.team_invites%rowtype;
  v_team public.teams%rowtype;
  v_profile public.profiles%rowtype;
  v_request public.team_join_requests%rowtype;
begin
  select * into v_profile
  from public.profiles
  where id = auth.uid() and status = 'active' and profile_complete;
  if v_profile.id is null then raise exception 'PROFILE_REQUIRED'; end if;

  select * into v_invite
  from public.team_invites
  where code_hash = public.invite_code_hash(p_code)
    and active and expires_at > now() and uses_count < max_uses
  for update;
  if v_invite.id is null then raise exception 'INVALID_INVITE'; end if;

  select * into v_team
  from public.teams
  where id = v_invite.team_id and setup_complete;
  if v_team.id is null then raise exception 'TEAM_NOT_READY'; end if;

  if exists (
    select 1 from public.team_members tm
    where tm.team_id = v_team.id and tm.user_id = auth.uid()
  ) then
    raise exception 'ALREADY_MEMBER';
  end if;

  select * into v_request
  from public.team_join_requests request
  where request.team_id = v_team.id and request.user_id = auth.uid()
  for update;

  if v_request.id is not null and v_request.status = 'pending' then
    raise exception 'ALREADY_REQUESTED';
  end if;

  insert into public.team_join_requests (
    team_id, invite_id, user_id, requested_role, status,
    requested_at, reviewed_at, reviewed_by
  ) values (
    v_team.id, v_invite.id, auth.uid(), v_invite.role, 'pending',
    now(), null, null
  )
  on conflict (team_id, user_id) do update
  set invite_id = excluded.invite_id,
      requested_role = excluded.requested_role,
      status = 'pending',
      requested_at = now(),
      reviewed_at = null,
      reviewed_by = null
  returning * into v_request;

  insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
  values (
    v_team.id,
    auth.uid(),
    auth.uid(),
    'team_join_requested',
    jsonb_build_object('role', v_invite.role, 'request_id', v_request.id)
  );

  return query
    select v_team.id, v_team.slug, v_team.name, v_invite.role,
           v_request.id, v_request.status;
end;
$$;

create or replace function public.list_team_join_requests(p_team_id uuid)
returns table(
  request_id uuid,
  user_id uuid,
  username text,
  full_name text,
  nickname text,
  requested_role text,
  requested_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_my_role text;
begin
  select tm.role into v_my_role
  from public.team_members tm
  where tm.team_id = p_team_id
    and tm.user_id = auth.uid()
    and tm.status = 'active';

  if v_my_role not in ('host', 'admin') then raise exception 'NOT_AUTHORIZED'; end if;

  return query
    select request.id, profile.id, profile.username, profile.full_name,
           profile.nickname, request.requested_role, request.requested_at
    from public.team_join_requests request
    join public.profiles profile on profile.id = request.user_id
    where request.team_id = p_team_id
      and request.status = 'pending'
      and profile.status = 'active'
    order by request.requested_at;
end;
$$;

create or replace function public.review_team_join_request(
  p_team_id uuid,
  p_request_id uuid,
  p_decision text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_my_role text;
  v_request public.team_join_requests%rowtype;
  v_invite public.team_invites%rowtype;
  v_profile public.profiles%rowtype;
  v_number text;
  v_editor_count integer;
begin
  select tm.role into v_my_role
  from public.team_members tm
  where tm.team_id = p_team_id
    and tm.user_id = auth.uid()
    and tm.status = 'active';

  if v_my_role not in ('host', 'admin') then raise exception 'NOT_AUTHORIZED'; end if;
  if p_decision not in ('approve', 'reject') then raise exception 'INVALID_DECISION'; end if;

  select * into v_request
  from public.team_join_requests request
  where request.id = p_request_id
    and request.team_id = p_team_id
  for update;

  if v_request.id is null then raise exception 'REQUEST_NOT_FOUND'; end if;
  if v_request.status <> 'pending' then raise exception 'REQUEST_ALREADY_REVIEWED'; end if;

  if p_decision = 'reject' then
    update public.team_join_requests
    set status = 'rejected', reviewed_at = now(), reviewed_by = auth.uid()
    where id = v_request.id;

    insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
    values (
      p_team_id, auth.uid(), v_request.user_id, 'team_join_rejected',
      jsonb_build_object('request_id', v_request.id)
    );
    return;
  end if;

  if exists (
    select 1 from public.team_members tm
    where tm.team_id = p_team_id and tm.user_id = v_request.user_id
  ) then
    raise exception 'ALREADY_MEMBER';
  end if;

  if v_my_role = 'admin' and v_request.requested_role = 'admin' then
    raise exception 'HOST_REQUIRED';
  end if;

  if v_request.requested_role in ('admin', 'manager', 'scorer') then
    select count(*) into v_editor_count
    from public.team_members tm
    where tm.team_id = p_team_id
      and tm.role in ('admin', 'manager', 'scorer')
      and tm.status = 'active';
    if v_editor_count >= 5 then raise exception 'MAX_EDITORS_REACHED'; end if;
  end if;

  select * into v_invite
  from public.team_invites invite
  where invite.id = v_request.invite_id
  for update;
  if v_invite.id is null
    or not v_invite.active
    or v_invite.expires_at <= now()
    or v_invite.uses_count >= v_invite.max_uses then
    raise exception 'INVITE_EXPIRED';
  end if;

  select * into v_profile
  from public.profiles profile
  where profile.id = v_request.user_id
    and profile.status = 'active'
    and profile.profile_complete;
  if v_profile.id is null then raise exception 'PROFILE_REQUIRED'; end if;

  insert into public.team_members (team_id, user_id, role)
  values (p_team_id, v_request.user_id, v_request.requested_role);

  update public.team_invites
  set uses_count = uses_count + 1,
      active = case when uses_count + 1 >= max_uses then false else active end
  where id = v_invite.id;

  v_number := v_profile.uniform_number;
  if exists (
    select 1 from public.team_players player
    where player.team_id = p_team_id and player.number = v_number and player.active
  ) then
    v_number := '';
  end if;

  insert into public.team_players (
    team_id, linked_user_id, name, number, primary_position,
    possible_positions, source, created_by
  ) values (
    p_team_id, v_profile.id, v_profile.full_name, v_number,
    v_profile.desired_positions[1], v_profile.desired_positions,
    'account', auth.uid()
  ) on conflict do nothing;

  update public.team_join_requests
  set status = 'approved', reviewed_at = now(), reviewed_by = auth.uid()
  where id = v_request.id;

  insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
  values (
    p_team_id, auth.uid(), v_request.user_id, 'team_join_approved',
    jsonb_build_object('role', v_request.requested_role, 'request_id', v_request.id)
  );
end;
$$;

revoke execute on function public.join_team_by_code(text) from public, anon;
revoke execute on function public.list_team_join_requests(uuid) from public, anon;
revoke execute on function public.review_team_join_request(uuid,uuid,text) from public, anon;

grant execute on function public.join_team_by_code(text) to authenticated;
grant execute on function public.list_team_join_requests(uuid) to authenticated;
grant execute on function public.review_team_join_request(uuid,uuid,text) to authenticated;
