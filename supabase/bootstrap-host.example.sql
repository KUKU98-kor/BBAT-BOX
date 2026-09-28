-- Run this once in the Supabase SQL Editor after replacing the placeholder.
-- Never commit the real one-time host code to a public repository.
insert into public.team_invites (
  team_id,
  code_hash,
  role,
  max_uses,
  expires_at,
  active
)
values (
  '00000000-0000-4000-8000-000000000023',
  public.invite_code_hash('REPLACE_WITH_PRIVATE_HOST_CODE'),
  'host',
  1,
  now() + interval '7 days',
  true
);
