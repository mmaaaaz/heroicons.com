/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
    images: { allowFutureImage: true },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset/source',
    })

    return config
  },
}

module.exports = nextConfig
