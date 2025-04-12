import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GITHUB_CLIENT_ID: "Iv23li0N1bRAbNgTuNHo",
    GITHUB_CLIENT_SECRET: "cba88ed1433a3b53c22f276e25dcb287fffa4763",

    GOOGLE_CLIENT_ID:
      "170742936453-74a6ah261ld14frrh9219bcikl70ksv4.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
  },

  images: {
    domains: ["avatars.githubusercontent.com", "platform-lookaside.fbsbx.com", "lh3.googleusercontent.com"],

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
