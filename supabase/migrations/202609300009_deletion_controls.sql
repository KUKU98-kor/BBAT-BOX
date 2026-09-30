create or replace function public.remove_manual_team_player(p_team_id uuid, p_player_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_player public.team_players%rowtype;
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if not public.is_team_manager(p_team_id) then raise exception 'NOT_AUTHORIZED'; end if;

  select * into v_player
  from public.team_players
  where id = p_player_id and team_id = p_team_id and active
  for update;

  if v_player.id is null then raise exception 'PLAYER_NOT_FOUND'; end if;
  if v_player.source <> 'manual' or v_player.linked_user_id is not null then
    raise exception 'ACCOUNT_PLAYER_PROTECTED';
  end if;

  update public.team_players set active = false where id = p_player_id;
  insert into public.account_audit_log (team_id, actor_id, action, details)
  values (p_team_id, auth.uid(), 'manual_player_removed', jsonb_build_object('player_id', p_player_id, 'name', v_player.name));
end;
$$;

create or replace function public.delete_team_attendance_poll(p_poll_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_poll public.team_attendance_polls%rowtype;
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  select * into v_poll from public.team_attendance_polls where id = p_poll_id for update;
  if v_poll.id is null then raise exception 'POLL_NOT_FOUND'; end if;
  if not public.is_team_manager(v_poll.team_id) then raise exception 'NOT_AUTHORIZED'; end if;

  update public.team_attendance_polls set status = 'cancelled', updated_at = now() where id = p_poll_id;
  insert into public.account_audit_log (team_id, actor_id, action, details)
  values (v_poll.team_id, auth.uid(), 'attendance_poll_deleted', jsonb_build_object('poll_id', p_poll_id, 'opponent', v_poll.opponent));
end;
$$;

create or replace function public.delete_team_league(p_team_id uuid, p_league_key text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_league public.team_leagues%rowtype;
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if not exists (
    select 1 from public.team_members tm
    where tm.team_id = p_team_id and tm.user_id = auth.uid()
      and tm.role in ('host', 'admin') and tm.status = 'active'
  ) then raise exception 'NOT_AUTHORIZED'; end if;

  select * into v_league
  from public.team_leagues
  where team_id = p_team_id and league_key = p_league_key and active
  for update;
  if v_league.id is null then raise exception 'LEAGUE_NOT_FOUND'; end if;

  update public.team_leagues set active = false, updated_at = now() where id = v_league.id;
  update public.team_attendance_polls
  set status = 'cancelled', updated_at = now()
  where team_id = p_team_id and league_key = p_league_key and status = 'active';

  insert into public.account_audit_log (team_id, actor_id, action, details)
  values (p_team_id, auth.uid(), 'team_league_deleted', jsonb_build_object('league_key', p_league_key, 'name', v_league.name));
end;
$$;

grant execute on function public.remove_manual_team_player(uuid,uuid) to authenticated;
grant execute on function public.delete_team_attendance_poll(uuid) to authenticated;
grant execute on function public.delete_team_league(uuid,text) to authenticated;
