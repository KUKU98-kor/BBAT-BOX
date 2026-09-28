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
  ) on conflict do nothing;

  insert into public.account_audit_log (team_id, actor_id, target_id, action, details)
  values (v_team.id, auth.uid(), auth.uid(), 'team_room_created', jsonb_build_object('name', v_team.name));

  return query select v_team.id, v_team.slug, v_team.name;
end;
$$;

grant execute on function public.create_team_room(text) to authenticated;
