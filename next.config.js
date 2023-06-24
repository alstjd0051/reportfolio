/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "openweathermap.org"],
  },
};

module.exports = nextConfig;
