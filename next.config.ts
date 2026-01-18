import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-maps.yandex.ru",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
