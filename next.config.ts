import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.website.dish.co"
      }
    ]
  }
};

export default nextConfig;
