/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    experimental: {
        esmExternals: true,
    },
    // externals: ["react-dom/client"], 
    // This configuration tells Next.js to treat external packages as ECMAScript modules.

    env: {
        NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN: process.env.INSTAGRAM_ACCESS_TOKEN,
        FACEBOOK_PAGEID: process.env.FACEBOOK_PAGEID,
        FACEBOOK_ACCESS_TOKEN: process.env.FACEBOOK_ACCESS_TOKEN,
    },
};

module.exports = nextConfig;
