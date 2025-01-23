<<<<<<< HEAD
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "",
}

module.exports = nextConfig

=======
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Disable image optimization since it's not supported in static exports
    images: {
        unoptimized: true,
    },
    // Add basePath and assetPrefix for GitHub Pages
    basePath: process.env.NODE_ENV === 'production' ? '/portafolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portafolio/' : ''
}

module.exports = nextConfig
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
