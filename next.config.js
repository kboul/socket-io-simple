/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    // allow pictures from this domain
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
