import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow DiceBear remote avatars (SVG)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
    ],
    // DiceBear returns SVGs; enable with a strict CSP
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
