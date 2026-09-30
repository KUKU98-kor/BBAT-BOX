import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const [app, scorebook, html, migration] = await Promise.all([
  readFile(new URL("app.js", root), "utf8"),
  readFile(new URL("scorebook.js", root), "utf8"),
  readFile(new URL("index.html", root), "utf8"),
  readFile(new URL("supabase/migrations/202609300010_cloud_game_data.sql", root), "utf8"),
]);

test("migration creates all shared and private cloud stores", () => {
  for (const table of ["team_lineups", "team_game_records", "user_private_notes"]) {
    assert.match(migration, new RegExp(`create table if not exists public\\.${table}`));
    assert.match(migration, new RegExp(`alter table public\\.${table} enable row level security`));
  }
  assert.match(migration, /profile_photo_path/);
  assert.match(migration, /profile-assets/);
  assert.match(migration, /alter publication supabase_realtime add table public\.team_game_records/);
});

test("application loads and writes lineups, game records, notes, and profile photos", () => {
  for (const rpc of [
    "list_team_lineups",
    "upsert_team_lineup",
    "list_team_game_records",
    "upsert_team_game_record",
    "delete_team_game_record",
    "get_private_note",
    "upsert_private_note",
    "update_my_profile_photo",
    "update_my_team_player",
  ]) assert.match(app, new RegExp(`\\"${rpc}\\"`));
  assert.match(app, /startCloudSync\(\)/);
  assert.match(app, /bbat-cloud-records-loaded/);
});

test("scorebook sends saves, live changes, and deletes through cloud adapter", () => {
  assert.match(scorebook, /BBATCloud\?\.saveGame/);
  assert.match(scorebook, /BBATCloud\?\.queueGameSave/);
  assert.match(scorebook, /BBATCloud\?\.deleteGame/);
  assert.match(scorebook, /bbat-cloud-records-loaded/);
});

test("deployment cache versions include cloud sync bundle", () => {
  assert.match(html, /app\.js\?v=22/);
  assert.match(html, /scorebook\.js\?v=12/);
});
