import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GITHUB_ID: "Ov23liHVksBzgnKRlBMD",
    GITHUB_SECRET: "92abd461a97858a27a3103ce742acd7dc442ffb4",
  },

  images: {
    domains: ["avatars.githubusercontent.com", "platform-lookaside.fbsbx.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      // Add other domains as needed
    ],
  },
};

export default nextConfig;
