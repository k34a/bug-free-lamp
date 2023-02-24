/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  async redirects() {
    return [
      {
        source: '/donate',
        destination: 'https://www.gofundme.com/f/larry-rowbs-clothing-recycling-initiative',
        permanent: true,
      },
      {
        source: '/tags',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
