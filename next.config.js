/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
  compiler: {    
    styledComponents: true
  },
  env: {
    APIKEY_SENDGRID: process.env.APIKEY_SENDGRID
  },  
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt",
  },
}

module.exports = nextConfig
