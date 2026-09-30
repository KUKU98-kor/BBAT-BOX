drop function if exists public.review_team_join_request(uuid,uuid,text);
drop function if exists public.list_team_join_requests(uuid);
drop function if exists public.join_team_by_code(text);
drop table if exists public.team_join_requests;

-- Restore the immediate-join behavior only when rolling this migration back.
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
  if exists (select 1 from public.team_members where team_id = v_team.id and user_id = auth.uid()) then
    raise exception 'ALREADY_MEMBER';
  end if;

  insert into public.team_members (team_id, user_id, role)
  values (v_team.id, auth.uid(), v_invite.role);
  update public.team_invites
  set uses_count = uses_count + 1,
      active = case when uses_count + 1 >= max_uses then false else active end
  where id = v_invite.id;

  v_number := v_profile.uniform_number;
  if exists (select 1 from public.team_players where team_id = v_team.id and number = v_number and active) then
    v_number := '';
  end if;
  insert into public.team_players (
    team_id, linked_user_id, name, number, primary_position,
    possible_positions, source, created_by
  ) values (
    v_team.id, auth.uid(), v_profile.full_name, v_number,
    v_profile.desired_positions[1], v_profile.desired_positions, 'account', auth.uid()
  ) on conflict do nothing;

  return query select v_team.id, v_team.slug, v_team.name, v_invite.role;
end;
$$;

grant execute on function public.join_team_by_code(text) to authenticated;
