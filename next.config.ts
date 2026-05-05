import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 456],
  },
  async redirects() {
    return [
      {
        source: "/sitemap/index.html",
        destination: "/sitemap",
        permanent: true,
      },
      {
        source: "/social-media-handling",
        destination: "/social-media-marketing",
        permanent: true,
      },
      {
        source: "/web-services/development",
        destination: "/web-development",
        permanent: true,
      },
      {
        source: "/web-services/hosting",
        destination: "/web-hosting",
        permanent: true,
      },
      {
        source: "/web-services/devops",
        destination: "/devops",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/social-media-marketing",
        destination: "/social-media-handling",
      },
      {
        source: "/web-development",
        destination: "/web-services/development",
      },
      {
        source: "/web-hosting",
        destination: "/web-services/hosting",
      },
      {
        source: "/devops",
        destination: "/web-services/devops",
      },
    ];
  },
};

export default nextConfig;
