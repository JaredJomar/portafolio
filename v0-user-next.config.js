/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "",
=======
  output: 'export',
  images: {
    unoptimized: true,
  },
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
}

module.exports = nextConfig

