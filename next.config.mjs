<<<<<<< HEAD
=======
<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
=======
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
<<<<<<< HEAD
=======
>>>>>>> 45a74c90d1e713c89eb94aa3f5ac23f84e3b5061
>>>>>>> c3fa5384aa439b15da03084628fd866ccae3b6f9
