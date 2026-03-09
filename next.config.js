const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

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
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "**",
      },
    ],
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
}

module.exports = nextConfig
