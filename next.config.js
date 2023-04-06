const CompressionPlugin  = require("compression-webpack-plugin");
require('dotenv').config();

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: { 
        loader: 'imgix',
        path: '/',
        minimumCacheTTL: 60,
        unoptimized: true,
        formats: ['image/webp'],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    compress: true,
    plugins: [
        new CompressionPlugin({
            test: /\.js$|\.css$|\.html$|\.ts$|\.tsx$/,
        }),
    ],
    trailingSlash: true,
    compiler: {
        styledComponents: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    env: {
        ENV: process.env.ENV,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    }
                ]
            }
        ]
    }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: false,
});

module.exports = withBundleAnalyzer(nextConfig)


