import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
    /<title>Mohsen Nouri — Software Engineer &amp; Developer<\/title>/i,
  );
  assert.match(html, /Full-Stack Software Developer/i);
  assert.match(html, /The Developer’s Sanctuary/i);
  assert.match(html, /Oner Shop/i);
  assert.match(html, /Full-Stack E-commerce/i);
  assert.match(html, /Prisma/i);
  assert.match(html, /Task Scheduler Engine/i);
  assert.match(html, /Concurrent &amp; Distributed Systems/i);
  assert.match(html, /Redis atomic claims/i);
  assert.match(html, /TaskFlow API/i);
  assert.match(html, /Backend REST API/i);
  assert.match(html, /connection pooling/i);
  assert.match(html, /Jalali Datepicker/i);
  assert.match(html, /Open-Source React Package/i);
  assert.match(html, /no runtime date-library dependency/i);
  assert.match(html, /View on npm/i);
  assert.match(html, /AI Chat RTL/i);
  assert.match(html, /Firefox Extension/i);
  assert.match(html, /independent, persistent RTL controls/i);
  assert.match(html, /Download extension/i);
  assert.doesNotMatch(html, /Monorepo Boilerplate/i);
  assert.doesNotMatch(html, /Rasad Bonyad Maskan/i);
  assert.match(html, /Bonyad Maskan e-Services/i);
  assert.match(html, /University of Tehran/i);
  assert.match(html, /Computer Science/i);
  assert.doesNotMatch(html, /Computer Engineering/i);
  assert.match(html, /Rajaee University \| Software Development Team/i);
  assert.match(html, /Client: Iran&#x27;s Ministry of Education/i);
  assert.match(html, /Led frontend development of React\.js and Next\.js applications/i);
  assert.doesNotMatch(html, /Shahid/i);
  assert.match(html, /Sirat 2/i);
  assert.match(html, /Tutak/i);
  assert.match(html, /January 2024 — July 2026/i);
  assert.match(html, /Salar Sari Navaii/i);
  assert.match(html, /Senior Frontend Developer/i);
  assert.match(html, /October 22, 2026/i);
  assert.match(html, /Salar managed Mohsen directly/i);
  assert.match(html, /strong experience in React and Next\.js/i);
  assert.match(html, /recommend him to any team looking for a strong Senior Front-End Developer/i);
  assert.match(html, /Development journey/i);
  assert.match(html, /Mohsen Nouri — Resume/i);
  assert.match(html, /Mohsen-Nouri-Resume\.pdf/i);
  assert.match(html, /Updated July 2026/i);
  assert.doesNotMatch(html, /Technical articles/i);
  assert.doesNotMatch(html, /ESSAY \/ 00/i);
  assert.doesNotMatch(html, /How to Design Background Jobs/i);
});

test("mobile layout keeps the document vertically scrollable", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /@media\s*\(max-width:760px\)[\s\S]*?\.sanctuary\{overflow-x:hidden;overflow-y:visible\}/);
  assert.match(css, /\.archivePanel\{[^}]*height:100dvh;max-height:100dvh/);
});
