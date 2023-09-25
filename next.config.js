/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/fade-test-pwa",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
