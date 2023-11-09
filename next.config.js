/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  distDir: 'out',
  basePath: '/portfolioNext',
  target: 'experimental-serverless-trace', 
  output: 'out', 
};

module.exports = nextConfig;