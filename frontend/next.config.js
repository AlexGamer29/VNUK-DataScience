require("dotenv").config({ path: `.env.${process.env.APP_ENV}` });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.wallpapersden.com"],
  },
  env: {
    NEXT_PUBLIC_SANITY_DATASET: "production",
    NEXT_PUBLIC_SANITY_PROJECT_ID: "4ypz59wh",
  },
};

module.exports = nextConfig;
