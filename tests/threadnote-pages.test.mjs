import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const base = process.env.PAGES_BASE_PATH ?? "";
const root = new URL("../dist/client/", import.meta.url);
for (const [route, title] of [
  ["threadnote", "Threadnote — A calmer desktop workspace"],
  ["threadnote/privacy", "Threadnote Privacy Policy"],
  ["threadnote/terms", "Threadnote Terms of Use"],
]) {
  test("exports the public " + route + " page with base-aware navigation", async () => {
    const html = await readFile(new URL(route + "/index.html", root), "utf8");
    assert.ok(html.includes(title));
    assert.match(html, /id="threadnote-content"/);
    for (const target of ["/threadnote/", "/threadnote/privacy/", "/threadnote/terms/"]) {
      assert.ok(html.includes('href="' + base + target + '"'), "missing link " + base + target);
    }
    assert.ok(html.includes("mnq13800831@gmail.com"));
    assert.doesNotMatch(html, /Continue with ChatGPT|<form\b/);
    assert.match(html, /<html[^>]*lang="en"/);
  });
}
test("privacy disclosures cover the implemented Google permissions and local storage", async () => {
  const html = await readFile(new URL("threadnote/privacy/index.html", root), "utf8");
  for (const text of ["Gmail", "Google Calendar", "Google Tasks", "Windows Credential Manager", "SQLite", "Limited Use", "Disconnect", "October 19, 2026"]) assert.ok(html.includes(text), text);
  assert.match(html, /developers\.google\.com\/terms\/api-services-user-data-policy/);
  assert.match(html, /myaccount\.google\.com\/connections/);
});
test("the product homepage describes the app and links its policies", async () => {
  const html = await readFile(new URL("threadnote/index.html", root), "utf8");
  assert.match(html, /Development preview/);
  assert.match(html, /No sending or deleting/);
  assert.match(html, /not uploaded to a Threadnote server/);
});
