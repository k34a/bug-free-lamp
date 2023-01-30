/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ], 
  },
  async redirects() {
    return [
      {
        source: '/donate',
        destination: 'https://www.gofundme.com/f/larry-rowbs-clothing-recycling-initiative',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
