import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MONGODB_URI:
      "mongodb+srv://andrei:4LiPeHPUkOJQt1jU@cluster0.94pxn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  },
};

export default nextConfig;
