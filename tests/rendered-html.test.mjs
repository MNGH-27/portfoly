import assert from "node:assert/strict";
import test from "node:test";

async function renderPortfolio() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio content", async () => {
  const response = await renderPortfolio();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Mohsen Nouri — Full-Stack Software Developer<\/title>/i,
  );
  assert.match(html, /Full-Stack Software Developer/i);
  assert.match(html, /Bonyad Maskan e-Services/i);
  assert.match(html, /Go \+ Node/i);
  assert.match(html, /Software Developer &amp; Team Leader/i);
  assert.match(html, /Shahid Rajaee University · Software Project Team/i);
  assert.match(html, /manager of a 20-person software team/i);
  assert.match(html, /Sirat 2/i);
  assert.match(html, /Feb 2024 — Present/i);
});
