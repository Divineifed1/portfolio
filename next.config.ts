import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Next scoped to this app when another project lockfile exists nearby.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
