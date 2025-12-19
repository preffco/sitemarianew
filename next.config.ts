import type { NextConfig } from "next"

const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1"

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/uploads/**',
      },
    ],
    ...(isStaticExport ? { unoptimized: true } : {}),
  },
  ...(isStaticExport ? { output: "export", trailingSlash: true } : {}),
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  compiler: {
    // Remove console.* from production bundles (keeps console.error by default)
    removeConsole: process.env.NODE_ENV === "production",
  },
}

export default nextConfig
