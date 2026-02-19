/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.harmonshirts.in',
      },
      {
        protocol: 'https',
        hostname: 'www.harmonshirts.in',
      },
      {
        protocol: 'http',
        hostname: 'www.vestro.in',
      },
      {
        protocol: 'https',
        hostname: 'www.vestro.in',
      },
      {
        protocol: 'http',
        hostname: 'www.blackstitch.in',
      },
      {
        protocol: 'https',
        hostname: 'www.blackstitch.in',
      },
    ],
  },
};

export default nextConfig;
