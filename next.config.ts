import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.1.19:3000/api/:path*"
      },
    ];
  }
};

export default nextConfig;
