/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sandeepbanuka.github.io",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
