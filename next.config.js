/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path",
        destination: "https://openapi.naver.com/:path*",
      },
    ];
  },

  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  trailingSlash: false,
};

module.exports = nextConfig;
