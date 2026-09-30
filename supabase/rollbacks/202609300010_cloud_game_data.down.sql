drop policy if exists profile_assets_owner_delete on storage.objects;
drop policy if exists profile_assets_owner_update on storage.objects;
drop policy if exists profile_assets_owner_insert on storage.objects;
drop policy if exists profile_assets_owner_select on storage.objects;
delete from storage.buckets where id = 'profile-assets';

drop function if exists public.update_my_profile_photo(text);
drop function if exists public.update_my_team_player(uuid,text,text,text,text);
drop function if exists public.get_private_note(date);
drop function if exists public.upsert_private_note(date,jsonb);
drop function if exists public.delete_team_game_record(uuid,text);
drop function if exists public.list_team_game_records(uuid);
drop function if exists public.upsert_team_game_record(uuid,text,text,date,text,jsonb,jsonb,boolean,boolean);
drop function if exists public.list_team_lineups(uuid);
drop function if exists public.upsert_team_lineup(uuid,text,text,date,jsonb);
drop function if exists public.can_record_team(uuid);
drop function if exists public.is_active_team_member(uuid);

drop table if exists public.user_private_notes;
drop table if exists public.team_game_records;
drop table if exists public.team_lineups;

alter table public.profiles drop column if exists profile_photo_path;
