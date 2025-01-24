const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/tech-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/tech-portfolio/" : "",
}

module.exports = nextConfig

