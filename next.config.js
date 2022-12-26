/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], //make it 'your-domain.com'
  },
};

module.exports = nextConfig;
