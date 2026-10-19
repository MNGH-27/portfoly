import { access, cp, mkdir, readFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("dist/client");
const indexPath = path.join(outputDirectory, "index.html");
const basePath = (process.env.PAGES_BASE_PATH ?? "")
  .replace(/^\/+/, "")
  .replace(/\/+$/, "");

await access(indexPath);

// Keep clean directory URLs on static hosts without triggering a prerender redirect.
for (const route of ["threadnote", "threadnote/privacy", "threadnote/terms"]) {
  const directory = path.join(outputDirectory, route);
  await mkdir(directory, { recursive: true });
  await cp(path.join(outputDirectory, route + ".html"), path.join(directory, "index.html"));
}

if (!basePath) {
  console.log("GitHub Pages artifact prepared for a root deployment.");
  process.exit(0);
}

const prefixedAssets = path.join(outputDirectory, basePath, "_next");
const rootAssets = path.join(outputDirectory, "_next");

await access(prefixedAssets);
await cp(prefixedAssets, rootAssets, { recursive: true });

const html = await readFile(indexPath, "utf8");
const expectedAssetPath = `/${basePath}/_next/static/`;

if (!html.includes(expectedAssetPath)) {
  throw new Error(`Static HTML is missing the expected ${expectedAssetPath} asset path.`);
}

console.log(`GitHub Pages artifact prepared for /${basePath}/.`);
