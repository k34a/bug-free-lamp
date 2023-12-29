/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
]

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '/',
        domains: ["iili.io"]
    },
    async redirects() {
        return [
            {
                source: '/blog/tags',
                destination: '/blog',
                permanent: true,
            },
            {
                source: '/authors',
                destination: '/blog',
                permanent: true,
            },
        ]
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ]
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config;
    },
}

module.exports = nextConfig
