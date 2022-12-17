/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['i.imgur.com', 'cdn.sanity.io', 'scontent.fuln8-1.fna.fbcdn.net'],
    },
    experimental: {
      appDir: true,
    },
  };

module.exports = {
    ...nextConfig,
    ...nextTranslate(),
}
