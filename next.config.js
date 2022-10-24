/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["blog.learnam.africa", "media.istockphoto.com", "t3.ftcdn.net"]
  }
}

module.exports = nextConfig
