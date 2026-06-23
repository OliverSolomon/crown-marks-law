import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Atmospheric photography is served from Unsplash's image CDN.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
