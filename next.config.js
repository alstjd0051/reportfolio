/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io", "openweathermap.org"],
  },
  trailingSlash: false,
};

module.exports = nextConfig;
