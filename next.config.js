/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'dummyimage.com',
      'www.imgacademy.com'
    ]
  }
}

module.exports = nextConfig
