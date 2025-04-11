/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Add trailing slash to ensure proper routing
  trailingSlash: true,
  // Add debug logging
  experimental: {
    logging: {
      level: 'debug'
    }
  }
};

export default nextConfig; 