import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'demo',
  images: {
    unoptimized: true,
  },
  assetPrefix: 'https://www.ottakombann.com/demo',
  basePath: '/demo', // <-- Add this line
};


export default nextConfig;
