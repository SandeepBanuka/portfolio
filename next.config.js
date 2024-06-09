/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sandeepbanuka.github.io",
      },
    ],
  }
};

module.exports = nextConfig;
