/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['meetaps.com', 'localhost', '127.0.0.1'],
  },
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;