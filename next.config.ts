import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  // Preserve PostHog analytics
  async rewrites() {
    return [];
  },
}

export default nextConfig

