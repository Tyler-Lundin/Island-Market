/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  // Add trailing slash to ensure proper routing
  trailingSlash: true,
  // Configure src directory
  distDir: '.next',
  // Add build-time logging
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: false,
      };
    }
    return config;
  },
  // Add headers for external scripts
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.instagram.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig; 