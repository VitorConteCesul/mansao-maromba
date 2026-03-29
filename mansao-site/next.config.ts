import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                 protocol: 'https',
                hostname: 'acdn-us.mitiendanube.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'd26lpennugtm8s.cloudfront.net',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
