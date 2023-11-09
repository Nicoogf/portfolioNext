/** @type {import('next').NextConfig} */
const nextConfig = {
 
  distDir: 'out',
  basePath: '/portfolioNext',
  output: 'export',
  experimental: {
    serverActions: true, 
  }
}

module.exports = nextConfig;
