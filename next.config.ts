import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Next.js will build even if there are pre-existing warnings in downstream files
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, // Bypass errors during initial migration phase
  },
};

export default nextConfig;
