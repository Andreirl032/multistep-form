import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MONGODB_URI:
      "mongodb+srv://andrei:a30102004@cluster0.94pxn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  },
};

export default nextConfig;
