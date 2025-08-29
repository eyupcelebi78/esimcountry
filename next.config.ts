import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO & Performance optimizations
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  // Compression
  compress: true,
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
  },
  
  // Enable static exports for better caching
  trailingSlash: false,
  
  // PWA-like features
  async redirects() {
    return []
  },
};

export default nextConfig;
