/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        remotePatterns: [
            {
                hostname: "p.urbanpro.com"
            },
            {
                hostname: "res.cloudinary.com"
            }
        ]
    }
};

export default nextConfig;
