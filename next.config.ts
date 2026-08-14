import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: pagesBasePath,
  trailingSlash: true,
};

export default nextConfig;
