import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const [app, html, manifestText, serviceWorker] = await Promise.all([
  readFile(new URL("app.js", root), "utf8"),
  readFile(new URL("index.html", root), "utf8"),
  readFile(new URL("manifest.webmanifest", root), "utf8"),
  readFile(new URL("sw.js", root), "utf8"),
]);
const manifest = JSON.parse(manifestText);

test("production page exposes installable PWA metadata", () => {
  assert.match(html, /rel="manifest" href="manifest\.webmanifest\?v=1"/);
  assert.match(html, /apple-mobile-web-app-capable/);
  assert.equal(manifest.name, "BBAT BOX");
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.start_url, "./");
  assert.ok(manifest.icons.length > 0);
});

test("application registers the production service worker", () => {
  assert.match(app, /navigator\.serviceWorker\.register\("\.\/sw\.js\?v=1\.0\.0"\)/);
  assert.match(serviceWorker, /bbat-box-v1\.0\.0/);
  assert.match(serviceWorker, /request\.mode === "navigate"/);
});
