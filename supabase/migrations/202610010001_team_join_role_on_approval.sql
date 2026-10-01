create or replace function public.review_team_join_request(
  p_team_id uuid,
  p_request_id uuid,
  p_decision text,
  p_role text
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

  if v_my_role not in ('host', 'admin') then
    raise exception 'NOT_AUTHORIZED';
  end if;

  if p_decision not in ('approve', 'reject') then
    raise exception 'INVALID_DECISION';
  end if;

  if p_role not in ('admin', 'manager', 'scorer', 'member') then
    raise exception 'INVALID_ROLE';
  end if;

  select * into v_request
  from public.team_join_requests request
  where request.id = p_request_id
    and request.team_id = p_team_id
  for update;

  if v_request.id is null then
    raise exception 'REQUEST_NOT_FOUND';
  end if;

  if v_request.status <> 'pending' then
    raise exception 'REQUEST_ALREADY_REVIEWED';
  end if;

  if p_decision = 'reject' then
    update public.team_join_requests
    set status = 'rejected', reviewed_at = now(), reviewed_by = auth.uid()
    where id = v_request.id;

    insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
    values (
      p_team_id,
      auth.uid(),
      v_request.user_id,
      'team_join_rejected',
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

  if v_my_role = 'admin' and p_role = 'admin' then
    raise exception 'HOST_REQUIRED';
  end if;

  if p_role in ('admin', 'manager', 'scorer') then
    select count(*) into v_editor_count
    from public.team_members tm
    where tm.team_id = p_team_id
      and tm.role in ('admin', 'manager', 'scorer')
      and tm.status = 'active';
    if v_editor_count >= 5 then
      raise exception 'MAX_EDITORS_REACHED';
    end if;
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

  if v_profile.id is null then
    raise exception 'PROFILE_REQUIRED';
  end if;

  insert into public.team_members (team_id, user_id, role)
  values (p_team_id, v_request.user_id, p_role);

  update public.team_invites
  set uses_count = uses_count + 1,
      active = case when uses_count + 1 >= max_uses then false else active end
  where id = v_invite.id;

  v_number := v_profile.uniform_number;
  if exists (
    select 1 from public.team_players player
    where player.team_id = p_team_id
      and player.number = v_number
      and player.active
  ) then
    v_number := '';
  end if;

  insert into public.team_players (
    team_id, linked_user_id, name, number, primary_position,
    possible_positions, source, created_by
  )
  values (
    p_team_id, v_profile.id, v_profile.full_name, v_number,
    v_profile.desired_positions[1], v_profile.desired_positions,
    'account', auth.uid()
  )
  on conflict do nothing;

  update public.team_join_requests
  set status = 'approved',
      requested_role = p_role,
      reviewed_at = now(),
      reviewed_by = auth.uid()
  where id = v_request.id;

  insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
  values (
    p_team_id,
    auth.uid(),
    v_request.user_id,
    'team_join_approved',
    jsonb_build_object('role', p_role, 'request_id', v_request.id)
  );
end;
$$;

-- Older cached clients may still call the previous three-argument RPC.
-- Treat those approvals as ordinary player approvals until the client refreshes.
create or replace function public.review_team_join_request(
  p_team_id uuid,
  p_request_id uuid,
  p_decision text
)
returns void
language sql
security definer
set search_path = public
as $$
  select public.review_team_join_request(p_team_id, p_request_id, p_decision, 'member');
$$;

revoke execute on function public.review_team_join_request(uuid, uuid, text, text) from public, anon;
revoke execute on function public.review_team_join_request(uuid, uuid, text) from public, anon;
grant execute on function public.review_team_join_request(uuid, uuid, text, text) to authenticated;
grant execute on function public.review_team_join_request(uuid, uuid, text) to authenticated;

comment on function public.review_team_join_request(uuid, uuid, text, text)
is 'Reviews a team join request and assigns the selected role at approval time.';
