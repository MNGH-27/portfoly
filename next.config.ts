import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: pagesBasePath,
  // Vinext beta prerenders route patterns without a slash; a redirect here
  // prevents nested routes from being exported. Pages preparation adds indexes.
  trailingSlash: false,
};

export default nextConfig;
