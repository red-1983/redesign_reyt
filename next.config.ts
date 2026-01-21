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
  async redirects() {
    return [
      {
        source: "/mobile/index_headlight.html",
        destination: "/headlight-polishing",
        permanent: true,
      },
      {
        source: "/mobile/index_condishioner.html",
        destination: "/refueling-conditioner",
        permanent: true,
      },
      {
        source: "/mobile/index_crack.html",
        destination: "/chip-repair",
        permanent: true,
      },
      {
        source: "/mobile/index_glass.html",
        destination: "/glass-replacement",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
