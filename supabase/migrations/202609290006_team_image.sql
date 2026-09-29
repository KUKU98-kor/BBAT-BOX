alter table public.teams
  add column if not exists team_image_path text not null default '';

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'team-assets',
  'team-assets',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists team_assets_member_read on storage.objects;
create policy team_assets_member_read
on storage.objects for select to authenticated
using (
  bucket_id = 'team-assets'
  and exists (
    select 1
    from public.team_members tm
    where tm.user_id = auth.uid()
      and tm.status = 'active'
      and tm.team_id::text = (storage.foldername(name))[1]
  )
);

drop policy if exists team_assets_editor_insert on storage.objects;
create policy team_assets_editor_insert
on storage.objects for insert to authenticated
with check (
  bucket_id = 'team-assets'
  and name = (storage.foldername(name))[1] || '/team-image'
  and exists (
    select 1
    from public.team_members tm
    join public.profiles p on p.id = tm.user_id
    where tm.user_id = auth.uid()
      and tm.status = 'active'
      and tm.role in ('host', 'admin')
      and p.status = 'active'
      and tm.team_id::text = (storage.foldername(name))[1]
  )
);

drop policy if exists team_assets_editor_update on storage.objects;
create policy team_assets_editor_update
on storage.objects for update to authenticated
using (
  bucket_id = 'team-assets'
  and exists (
    select 1
    from public.team_members tm
    join public.profiles p on p.id = tm.user_id
    where tm.user_id = auth.uid()
      and tm.status = 'active'
      and tm.role in ('host', 'admin')
      and p.status = 'active'
      and tm.team_id::text = (storage.foldername(name))[1]
  )
)
with check (
  bucket_id = 'team-assets'
  and name = (storage.foldername(name))[1] || '/team-image'
);

create or replace function public.update_team_profile(
  p_team_id uuid,
  p_name text,
  p_region text,
  p_primary_leagues text[],
  p_manager_name text,
  p_founded_year integer,
  p_home_field text,
  p_description text,
  p_team_image_path text
)
returns public.teams
language plpgsql
security definer
set search_path = public
as $$
declare
  v_team public.teams%rowtype;
  v_leagues text[];
  v_image_path text := trim(coalesce(p_team_image_path, ''));
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

  v_leagues := array(
    select trim(value)
    from unnest(coalesce(p_primary_leagues, '{}'::text[])) as league(value)
    where trim(value) <> ''
    limit 2
  );

  if char_length(trim(p_name)) not between 2 and 40 then raise exception 'INVALID_TEAM_NAME'; end if;
  if char_length(trim(p_region)) not between 1 and 30 then raise exception 'INVALID_REGION'; end if;
  if coalesce(array_length(v_leagues, 1), 0) not between 1 and 2 then raise exception 'INVALID_LEAGUES'; end if;
  if exists (select 1 from unnest(v_leagues) as league(value) where char_length(value) > 60) then raise exception 'INVALID_LEAGUE_NAME'; end if;
  if char_length(trim(p_manager_name)) not between 1 and 30 then raise exception 'INVALID_MANAGER'; end if;
  if p_founded_year not between 1900 and 2100 then raise exception 'INVALID_FOUNDED_YEAR'; end if;
  if char_length(trim(p_home_field)) not between 1 and 80 then raise exception 'INVALID_HOME_FIELD'; end if;
  if char_length(trim(coalesce(p_description, ''))) > 300 then raise exception 'INVALID_DESCRIPTION'; end if;
  if v_image_path <> '' and v_image_path <> p_team_id::text || '/team-image' then raise exception 'INVALID_TEAM_IMAGE'; end if;

  update public.teams
  set name = trim(p_name),
      region = trim(p_region),
      primary_leagues = v_leagues,
      manager_name = trim(p_manager_name),
      founded_year = p_founded_year,
      home_field = trim(p_home_field),
      description = trim(coalesce(p_description, '')),
      team_image_path = v_image_path,
      updated_at = now()
  where id = p_team_id and setup_complete
  returning * into v_team;

  if v_team.id is null then raise exception 'TEAM_NOT_FOUND'; end if;

  insert into public.account_audit_log (team_id, actor_id, action, details)
  values (
    p_team_id,
    auth.uid(),
    'team_profile_updated',
    jsonb_build_object(
      'name', v_team.name,
      'region', v_team.region,
      'primary_leagues', v_team.primary_leagues,
      'has_team_image', v_team.team_image_path <> ''
    )
  );

  return v_team;
end;
$$;

grant execute on function public.update_team_profile(uuid,text,text,text[],text,integer,text,text,text) to authenticated;
