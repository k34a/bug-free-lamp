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
        source: '/blog/tags',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
