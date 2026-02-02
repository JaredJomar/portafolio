const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "c.tenor.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "wakatime.com",
        pathname: "**",
      },
    ],
  },
  basePath: process.env.NODE_ENV === "production" ? "/portafolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portafolio/" : "",
  trailingSlash: true,
  async redirects() {
    if (process.env.NODE_ENV === "production") {
      return []
    }

    return [
      {
        source: "/portafolio",
        destination: "/",
        permanent: false,
      },
      {
        source: "/portafolio/:path*",
        destination: "/:path*",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
