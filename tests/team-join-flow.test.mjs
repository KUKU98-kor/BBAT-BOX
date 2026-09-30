import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [app, html, migration] = await Promise.all([
  readFile(new URL("../app.js", import.meta.url), "utf8"),
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../supabase/migrations/202609300011_team_join_approval.sql", import.meta.url), "utf8"),
]);

test("team page join button opens the code form", () => {
  assert.match(app, /#joinTeamButton[\s\S]*openTeamAction\("#teamJoinGate"\)/);
  assert.match(html, /id="teamJoinCode"/);
});

test("entering a team code creates a pending request", () => {
  assert.match(migration, /create table if not exists public\.team_join_requests/);
  assert.match(migration, /status = 'pending'/);
  assert.doesNotMatch(migration.match(/create or replace function public\.join_team_by_code[\s\S]*?\$\$;/)?.[0] ?? "", /insert into public\.team_members/);
});

test("only host or admin can review requests", () => {
  assert.match(migration, /v_my_role not in \('host', 'admin'\)/);
  assert.match(migration, /create or replace function public\.review_team_join_request/);
  assert.match(app, /review_team_join_request/);
});

test("approval adds both membership and linked player", () => {
  assert.match(migration, /insert into public\.team_members/);
  assert.match(migration, /insert into public\.team_players/);
  assert.match(migration, /team_join_approved/);
});
