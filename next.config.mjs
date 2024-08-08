/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // Basic redirect
            {
                source: "/donate",
                destination:
                    "https://www.gofundme.com/f/larry-rowbs-clothing-recycling-initiative",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
