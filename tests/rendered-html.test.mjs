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
  assert.match(html, /<html[^>]*\blang="en"/i);
  assert.match(html, /<html[^>]*\bdir="ltr"/i);
  assert.match(html, /<html[^>]*\bdata-theme="dark"/i);
  assert.match(
    html,
    /<title>Mohsen Nouri — Full-Stack Software Developer<\/title>/i,
  );
  assert.match(html, /Full-Stack Software Developer/i);
  assert.match(html, /Explore my work on GitHub/i);
  assert.match(html, /Oner Shop/i);
  assert.match(html, /Full-Stack E-commerce/i);
  assert.match(html, /Prisma/i);
  assert.match(html, /Task Scheduler Engine/i);
  assert.match(html, /Concurrent &amp; Distributed Systems/i);
  assert.match(html, /Redis atomic claims/i);
  assert.match(html, /TaskFlow API/i);
  assert.match(html, /Backend REST API/i);
  assert.match(html, /connection pooling/i);
  assert.match(html, /AI Chat RTL/i);
  assert.match(html, /Firefox Extension/i);
  assert.match(html, /independent, persistent RTL controls/i);
  assert.match(html, /Download extension/i);
  assert.match(html, /Turborepo/i);
  assert.match(html, /Storybook/i);
  assert.match(html, /Bonyad Maskan e-Services/i);
  assert.match(html, /Go \+ Node/i);
  assert.match(html, /Software Developer &amp; Team Leader/i);
  assert.match(html, /Shahid Rajaee University · Software Project Team/i);
  assert.match(html, /manager of a 20-person software team/i);
  assert.match(html, /Sirat 2/i);
  assert.match(html, /Feb 2024 — Present/i);
  assert.match(html, /Resume and professional documents/i);
  assert.match(html, /Mohsen Nouri — Resume/i);
  assert.match(html, /Mohsen-Nouri-Resume\.pdf/i);
  assert.match(html, /Updated July 2026/i);
});
