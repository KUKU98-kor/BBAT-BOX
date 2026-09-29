create table if not exists public.team_attendance_polls (
  id uuid primary key default gen_random_uuid(),
  team_id uuid not null references public.teams(id) on delete cascade,
  league_key text not null,
  league_name text not null,
  game_date date not null,
  game_time time not null,
  opponent text not null,
  venue text not null,
  closes_at timestamptz not null,
  status text not null default 'active' check (status in ('active', 'cancelled')),
  created_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (char_length(league_key) between 1 and 80),
  check (char_length(league_name) between 1 and 80),
  check (char_length(opponent) between 1 and 60),
  check (char_length(venue) between 1 and 80)
);

create index if not exists team_attendance_polls_team_date_idx
  on public.team_attendance_polls (team_id, game_date, game_time);

create table if not exists public.team_attendance_responses (
  poll_id uuid not null references public.team_attendance_polls(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  response text not null check (response in ('yes', 'maybe', 'no')),
  updated_at timestamptz not null default now(),
  primary key (poll_id, user_id)
);

alter table public.team_attendance_polls enable row level security;
alter table public.team_attendance_responses enable row level security;

revoke all on public.team_attendance_polls, public.team_attendance_responses from anon, authenticated;

create or replace function public.create_team_attendance_poll(
  p_team_id uuid,
  p_league_key text,
  p_league_name text,
  p_game_date date,
  p_game_time time,
  p_opponent text,
  p_venue text
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_poll_id uuid;
  v_closes_at timestamptz;
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if not exists (
    select 1
    from public.team_members tm
    join public.profiles p on p.id = tm.user_id
    where tm.team_id = p_team_id
      and tm.user_id = auth.uid()
      and tm.role in ('host', 'admin', 'manager')
      and tm.status = 'active'
      and p.status = 'active'
  ) then raise exception 'NOT_AUTHORIZED'; end if;
  if p_game_date < (now() at time zone 'Asia/Seoul')::date then raise exception 'PAST_GAME_DATE'; end if;
  if char_length(trim(p_league_key)) not between 1 and 80 then raise exception 'INVALID_LEAGUE'; end if;
  if char_length(trim(p_league_name)) not between 1 and 80 then raise exception 'INVALID_LEAGUE'; end if;
  if char_length(trim(p_opponent)) not between 1 and 60 then raise exception 'INVALID_OPPONENT'; end if;
  if char_length(trim(p_venue)) not between 1 and 80 then raise exception 'INVALID_VENUE'; end if;

  v_closes_at := ((p_game_date::timestamp + p_game_time) at time zone 'Asia/Seoul') - interval '7 days';

  insert into public.team_attendance_polls (
    team_id, league_key, league_name, game_date, game_time,
    opponent, venue, closes_at, created_by
  ) values (
    p_team_id, trim(p_league_key), trim(p_league_name), p_game_date, p_game_time,
    trim(p_opponent), trim(p_venue), v_closes_at, auth.uid()
  ) returning id into v_poll_id;

  insert into public.account_audit_log (team_id, actor_id, action, details)
  values (
    p_team_id,
    auth.uid(),
    'attendance_poll_created',
    jsonb_build_object('poll_id', v_poll_id, 'game_date', p_game_date, 'opponent', trim(p_opponent))
  );

  return v_poll_id;
end;
$$;

create or replace function public.respond_team_attendance_poll(
  p_poll_id uuid,
  p_response text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_poll public.team_attendance_polls%rowtype;
begin
  if auth.uid() is null then raise exception 'NOT_AUTHENTICATED'; end if;
  if p_response not in ('yes', 'maybe', 'no') then raise exception 'INVALID_RESPONSE'; end if;

  select * into v_poll
  from public.team_attendance_polls
  where id = p_poll_id and status = 'active';

  if v_poll.id is null then raise exception 'POLL_NOT_FOUND'; end if;
  if now() >= v_poll.closes_at then raise exception 'POLL_CLOSED'; end if;
  if not exists (
    select 1
    from public.team_members tm
    join public.profiles p on p.id = tm.user_id
    where tm.team_id = v_poll.team_id
      and tm.user_id = auth.uid()
      and tm.status = 'active'
      and p.status = 'active'
  ) then raise exception 'NOT_AUTHORIZED'; end if;

  insert into public.team_attendance_responses (poll_id, user_id, response)
  values (p_poll_id, auth.uid(), p_response)
  on conflict (poll_id, user_id) do update
  set response = excluded.response,
      updated_at = now();
end;
$$;

create or replace function public.list_team_attendance_polls(p_team_id uuid)
returns table(
  poll_id uuid,
  league_key text,
  league_name text,
  game_date date,
  game_time time,
  opponent text,
  venue text,
  closes_at timestamptz,
  is_closed boolean,
  yes_count bigint,
  maybe_count bigint,
  no_count bigint,
  my_response text,
  yes_names text[]
)
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
  select
    poll.id,
    poll.league_key,
    poll.league_name,
    poll.game_date,
    poll.game_time,
    poll.opponent,
    poll.venue,
    poll.closes_at,
    now() >= poll.closes_at,
    count(*) filter (where response.response = 'yes'),
    count(*) filter (where response.response = 'maybe'),
    count(*) filter (where response.response = 'no'),
    max(response.response) filter (where response.user_id = auth.uid()),
    coalesce(
      array_agg(profile.full_name order by profile.full_name) filter (where response.response = 'yes'),
      '{}'::text[]
    )
  from public.team_attendance_polls poll
  left join public.team_attendance_responses response on response.poll_id = poll.id
  left join public.profiles profile on profile.id = response.user_id
  where poll.team_id = p_team_id
    and poll.status = 'active'
    and poll.game_date >= (now() at time zone 'Asia/Seoul')::date
  group by poll.id
  order by poll.game_date, poll.game_time;
end;
$$;

grant execute on function public.create_team_attendance_poll(uuid,text,text,date,time,text,text) to authenticated;
grant execute on function public.respond_team_attendance_poll(uuid,text) to authenticated;
grant execute on function public.list_team_attendance_polls(uuid) to authenticated;
