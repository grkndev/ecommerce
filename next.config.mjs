/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ideacdn.net',
        
      },
    ],
  },};

export default nextConfig;
