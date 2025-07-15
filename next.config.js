/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  // Preserve PostHog analytics
  async rewrites() {
    return [];
  },
}

module.exports = nextConfig 