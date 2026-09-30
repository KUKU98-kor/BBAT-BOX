alter table public.profiles
  add column if not exists profile_photo_path text not null default '';

create table if not exists public.team_lineups (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.teams(id) on delete cascade,
  lineup_key text not null,
  league_key text not null,
  game_date date not null,
  payload jsonb not null default '{}'::jsonb,
  updated_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (team_id, lineup_key),
  check (char_length(lineup_key) between 1 and 240),
  check (char_length(league_key) between 1 and 80),
  check (jsonb_typeof(payload) = 'object')
);

create table if not exists public.team_game_records (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.teams(id) on delete cascade,
  record_key text not null,
  league_key text not null,
  game_date date not null,
  opponent text not null default '',
  payload jsonb not null default '{}'::jsonb,
  live_state jsonb not null default '{}'::jsonb,
  finished boolean not null default false,
  is_live boolean not null default false,
  created_by uuid not null references public.profiles(id) on delete restrict,
  updated_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (team_id, record_key),
  check (char_length(record_key) between 1 and 160),
  check (char_length(league_key) between 1 and 80),
  check (char_length(opponent) <= 80),
  check (jsonb_typeof(payload) = 'object'),
  check (jsonb_typeof(live_state) = 'object')
);

create index if not exists team_lineups_team_date_idx
  on public.team_lineups (team_id, game_date desc);

create index if not exists team_game_records_team_date_idx
  on public.team_game_records (team_id, game_date desc, updated_at desc);

create index if not exists team_game_records_live_idx
  on public.team_game_records (team_id, is_live, updated_at desc);

create table if not exists public.user_private_notes (
  user_id uuid not null references public.profiles(id) on delete cascade,
  note_date date not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, note_date),
  check (jsonb_typeof(payload) = 'object')
);

alter table public.team_lineups enable row level security;
alter table public.team_game_records enable row level security;
alter table public.user_private_notes enable row level security;

revoke all on public.team_lineups, public.team_game_records, public.user_private_notes from anon, authenticated;

create or replace function public.is_active_team_member(p_team_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.team_members tm
    join public.profiles p on p.id = tm.user_id
    where tm.team_id = p_team_id
      and tm.user_id = auth.uid()
      and tm.status = 'active'
      and p.status = 'active'
  );
$$;

create or replace function public.can_record_team(p_team_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.team_members tm
    join public.profiles p on p.id = tm.user_id
    where tm.team_id = p_team_id
      and tm.user_id = auth.uid()
      and tm.role in ('host', 'admin', 'manager', 'scorer')
      and tm.status = 'active'
      and p.status = 'active'
  );
$$;

drop policy if exists team_lineups_member_select on public.team_lineups;
create policy team_lineups_member_select on public.team_lineups
for select to authenticated
using (public.is_active_team_member(team_id));

drop policy if exists team_game_records_member_select on public.team_game_records;
create policy team_game_records_member_select on public.team_game_records
for select to authenticated
using (public.is_active_team_member(team_id));

drop policy if exists private_notes_owner_select on public.user_private_notes;
create policy private_notes_owner_select on public.user_private_notes
for select to authenticated
using (user_id = auth.uid());

grant select on public.team_lineups, public.team_game_records, public.user_private_notes to authenticated;

create or replace function public.upsert_team_lineup(
  p_team_id uuid,
  p_lineup_key text,
  p_league_key text,
  p_game_date date,
  p_payload jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if not public.is_team_manager(p_team_id) then raise exception 'NOT_AUTHORIZED'; end if;
  if char_length(trim(p_lineup_key)) not between 1 and 240 then raise exception 'INVALID_LINEUP_KEY'; end if;
  if char_length(trim(p_league_key)) not between 1 and 80 then raise exception 'INVALID_LEAGUE'; end if;
  if p_game_date is null then raise exception 'INVALID_GAME_DATE'; end if;
  if jsonb_typeof(coalesce(p_payload, '{}'::jsonb)) <> 'object' then raise exception 'INVALID_PAYLOAD'; end if;

  insert into public.team_lineups (
    team_id, lineup_key, league_key, game_date, payload, updated_by
  ) values (
    p_team_id, trim(p_lineup_key), trim(p_league_key), p_game_date,
    coalesce(p_payload, '{}'::jsonb), auth.uid()
  )
  on conflict (team_id, lineup_key) do update
  set league_key = excluded.league_key,
      game_date = excluded.game_date,
      payload = excluded.payload,
      updated_by = auth.uid(),
      updated_at = now();
end;
$$;

create or replace function public.list_team_lineups(p_team_id uuid)
returns table(lineup_key text, league_key text, game_date date, payload jsonb, updated_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_active_team_member(p_team_id) then raise exception 'NOT_AUTHORIZED'; end if;
  return query
    select lineup.lineup_key, lineup.league_key, lineup.game_date, lineup.payload, lineup.updated_at
    from public.team_lineups lineup
    where lineup.team_id = p_team_id
    order by lineup.game_date desc, lineup.updated_at desc;
end;
$$;

create or replace function public.upsert_team_game_record(
  p_team_id uuid,
  p_record_key text,
  p_league_key text,
  p_game_date date,
  p_opponent text,
  p_payload jsonb,
  p_live_state jsonb,
  p_finished boolean,
  p_is_live boolean
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if not public.can_record_team(p_team_id) then raise exception 'NOT_AUTHORIZED'; end if;
  if char_length(trim(p_record_key)) not between 1 and 160 then raise exception 'INVALID_RECORD_KEY'; end if;
  if char_length(trim(p_league_key)) not between 1 and 80 then raise exception 'INVALID_LEAGUE'; end if;
  if p_game_date is null then raise exception 'INVALID_GAME_DATE'; end if;
  if char_length(trim(coalesce(p_opponent, ''))) > 80 then raise exception 'INVALID_OPPONENT'; end if;
  if jsonb_typeof(coalesce(p_payload, '{}'::jsonb)) <> 'object' then raise exception 'INVALID_PAYLOAD'; end if;
  if jsonb_typeof(coalesce(p_live_state, '{}'::jsonb)) <> 'object' then raise exception 'INVALID_LIVE_STATE'; end if;

  if coalesce(p_is_live, false) then
    update public.team_game_records
    set is_live = false,
        live_state = live_state || jsonb_build_object('live', false),
        updated_at = now(),
        updated_by = auth.uid()
    where team_id = p_team_id and record_key <> trim(p_record_key) and is_live;
  end if;

  insert into public.team_game_records (
    team_id, record_key, league_key, game_date, opponent, payload,
    live_state, finished, is_live, created_by, updated_by
  ) values (
    p_team_id, trim(p_record_key), trim(p_league_key), p_game_date,
    trim(coalesce(p_opponent, '')), coalesce(p_payload, '{}'::jsonb),
    coalesce(p_live_state, '{}'::jsonb), coalesce(p_finished, false),
    coalesce(p_is_live, false), auth.uid(), auth.uid()
  )
  on conflict (team_id, record_key) do update
  set league_key = excluded.league_key,
      game_date = excluded.game_date,
      opponent = excluded.opponent,
      payload = excluded.payload,
      live_state = excluded.live_state,
      finished = excluded.finished,
      is_live = excluded.is_live,
      updated_by = auth.uid(),
      updated_at = now();
end;
$$;

create or replace function public.list_team_game_records(p_team_id uuid)
returns table(
  record_key text,
  league_key text,
  game_date date,
  payload jsonb,
  live_state jsonb,
  finished boolean,
  is_live boolean,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_active_team_member(p_team_id) then raise exception 'NOT_AUTHORIZED'; end if;
  return query
    select game.record_key, game.league_key, game.game_date, game.payload,
           game.live_state, game.finished, game.is_live, game.updated_at
    from public.team_game_records game
    where game.team_id = p_team_id
    order by game.game_date desc, game.updated_at desc;
end;
$$;

create or replace function public.delete_team_game_record(p_team_id uuid, p_record_key text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_record public.team_game_records%rowtype;
begin
  if not public.can_record_team(p_team_id) then raise exception 'NOT_AUTHORIZED'; end if;
  select * into v_record
  from public.team_game_records
  where team_id = p_team_id and record_key = p_record_key
  for update;
  if v_record.id is null then raise exception 'RECORD_NOT_FOUND'; end if;
  delete from public.team_game_records where id = v_record.id;
  insert into public.account_audit_log (team_id, actor_id, action, details)
  values (p_team_id, auth.uid(), 'game_record_deleted', jsonb_build_object('record_key', p_record_key));
end;
$$;

create or replace function public.upsert_private_note(p_note_date date, p_payload jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if p_note_date is null then raise exception 'INVALID_NOTE_DATE'; end if;
  if jsonb_typeof(coalesce(p_payload, '{}'::jsonb)) <> 'object' then raise exception 'INVALID_PAYLOAD'; end if;
  insert into public.user_private_notes (user_id, note_date, payload)
  values (auth.uid(), p_note_date, coalesce(p_payload, '{}'::jsonb))
  on conflict (user_id, note_date) do update
  set payload = excluded.payload, updated_at = now();
end;
$$;

create or replace function public.get_private_note(p_note_date date)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select coalesce((
    select note.payload
    from public.user_private_notes note
    where note.user_id = auth.uid() and note.note_date = p_note_date
  ), '{}'::jsonb);
$$;

create or replace function public.update_my_profile_photo(p_path text)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_path text := trim(coalesce(p_path, ''));
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if v_path <> '' and v_path <> (auth.uid()::text || '/profile') then raise exception 'INVALID_PROFILE_PHOTO'; end if;
  update public.profiles
  set profile_photo_path = v_path, updated_at = now()
  where id = auth.uid() and status = 'active';
  return v_path;
end;
$$;

create or replace function public.update_my_team_player(
  p_team_id uuid,
  p_number text,
  p_position text,
  p_throws text,
  p_bats text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_number text := trim(coalesce(p_number, ''));
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if not public.is_active_team_member(p_team_id) then raise exception 'NOT_AUTHORIZED'; end if;
  if char_length(v_number) > 3 then raise exception 'INVALID_NUMBER'; end if;
  if trim(coalesce(p_position, '')) = '' then raise exception 'INVALID_POSITION'; end if;
  if p_throws not in ('우투', '좌투') then raise exception 'INVALID_THROWS'; end if;
  if p_bats not in ('우타', '좌타', '양타') then raise exception 'INVALID_BATS'; end if;
  if v_number <> '' and exists (
    select 1 from public.team_players player
    where player.team_id = p_team_id and player.active
      and player.number = v_number and player.linked_user_id <> auth.uid()
  ) then raise exception 'NUMBER_ALREADY_USED'; end if;

  update public.team_players
  set number = v_number,
      primary_position = trim(p_position),
      possible_positions = case
        when trim(p_position) = any(possible_positions) then possible_positions
        else array_prepend(trim(p_position), possible_positions)
      end,
      throws = p_throws,
      bats = p_bats,
      updated_at = now()
  where team_id = p_team_id and linked_user_id = auth.uid() and active;

  if not found then raise exception 'PLAYER_NOT_FOUND'; end if;
end;
$$;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'profile-assets',
  'profile-assets',
  false,
  2097152,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists profile_assets_owner_select on storage.objects;
create policy profile_assets_owner_select
on storage.objects for select to authenticated
using (
  bucket_id = 'profile-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists profile_assets_owner_insert on storage.objects;
create policy profile_assets_owner_insert
on storage.objects for insert to authenticated
with check (
  bucket_id = 'profile-assets'
  and name = auth.uid()::text || '/profile'
);

drop policy if exists profile_assets_owner_update on storage.objects;
create policy profile_assets_owner_update
on storage.objects for update to authenticated
using (
  bucket_id = 'profile-assets'
  and name = auth.uid()::text || '/profile'
)
with check (
  bucket_id = 'profile-assets'
  and name = auth.uid()::text || '/profile'
);

drop policy if exists profile_assets_owner_delete on storage.objects;
create policy profile_assets_owner_delete
on storage.objects for delete to authenticated
using (
  bucket_id = 'profile-assets'
  and name = auth.uid()::text || '/profile'
);

revoke execute on function public.is_active_team_member(uuid) from public, anon;
revoke execute on function public.can_record_team(uuid) from public, anon;
revoke execute on function public.upsert_team_lineup(uuid,text,text,date,jsonb) from public, anon;
revoke execute on function public.list_team_lineups(uuid) from public, anon;
revoke execute on function public.upsert_team_game_record(uuid,text,text,date,text,jsonb,jsonb,boolean,boolean) from public, anon;
revoke execute on function public.list_team_game_records(uuid) from public, anon;
revoke execute on function public.delete_team_game_record(uuid,text) from public, anon;
revoke execute on function public.upsert_private_note(date,jsonb) from public, anon;
revoke execute on function public.get_private_note(date) from public, anon;
revoke execute on function public.update_my_profile_photo(text) from public, anon;
revoke execute on function public.update_my_team_player(uuid,text,text,text,text) from public, anon;

grant execute on function public.is_active_team_member(uuid) to authenticated;
grant execute on function public.can_record_team(uuid) to authenticated;
grant execute on function public.upsert_team_lineup(uuid,text,text,date,jsonb) to authenticated;
grant execute on function public.list_team_lineups(uuid) to authenticated;
grant execute on function public.upsert_team_game_record(uuid,text,text,date,text,jsonb,jsonb,boolean,boolean) to authenticated;
grant execute on function public.list_team_game_records(uuid) to authenticated;
grant execute on function public.delete_team_game_record(uuid,text) to authenticated;
grant execute on function public.upsert_private_note(date,jsonb) to authenticated;
grant execute on function public.get_private_note(date) to authenticated;
grant execute on function public.update_my_profile_photo(text) to authenticated;
grant execute on function public.update_my_team_player(uuid,text,text,text,text) to authenticated;

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'team_game_records'
  ) then
    alter publication supabase_realtime add table public.team_game_records;
  end if;
end;
$$;
