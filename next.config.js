/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  output: "export",
  basePath: "/Fade-test-pwa",
  images: {
    unoptimized: true,
  },
};

module.exports = withPWA(nextConfig);
