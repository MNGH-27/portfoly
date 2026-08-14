import { access, cp, readFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("dist/client");
const indexPath = path.join(outputDirectory, "index.html");
const basePath = (process.env.PAGES_BASE_PATH ?? "")
  .replace(/^\/+/, "")
  .replace(/\/+$/, "");

await access(indexPath);

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
