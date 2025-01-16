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
