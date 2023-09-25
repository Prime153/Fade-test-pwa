/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
  output: "export",
  basePath: "/Fade-test-pwa",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
