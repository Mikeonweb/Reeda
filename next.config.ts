import { prototype } from "events";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    ppr: "incremental" // Enables Partial Prerendering
  },
  devIndicators: {
    buildActivity: true, // Enables the build activity indicator in development mode
    appIsrStatus: true, // Enables the ISR status indicator in development modenp
    buildActivityPosition: "bottom-right", // Sets the position of the build activity indicator
  },
};

export default nextConfig;
