/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            },
            {
                hostname: "avatars.githubusercontent.com"
            }
        ],
        // Optimize image loading with modern formats
        formats: ['image/avif', 'image/webp'],
    },
    
    // Optimize build and startup performance
    onDemandEntries: {
        maxInactiveAge: 30 * 1000, // Reduced from 60s for faster cleanup
        pagesBufferLength: 3,      // Reduced from 5
    },
    
    // Use Turbopack for faster builds (Next.js 16+)
    turbopack: {
        resolveAlias: {
            '@': './src',
        },
    },
    
    // Experimental optimizations
    experimental: {
        optimizePackageImports: ['@phosphor-icons/react'],
    },
    
    poweredByHeader: false,
    compress: true,
}

module.exports = nextConfig