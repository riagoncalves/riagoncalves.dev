import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  experimental: {
    // Each language has its own root layout (for the correct <html lang>), so the
    // 404 page for unmatched URLs can't be composed from a single root layout.
    globalNotFound: true,
  },
};

export default nextConfig;
