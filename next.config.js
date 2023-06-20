/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  i18n: {
    locales: ['en', 'es', 'pt', 'fr'],
    defaultLocale: 'en'
  }
};

module.exports = nextConfig;
