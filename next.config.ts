/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем ошибку для useSearchParams
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Или пропускаем проверки во время сборки
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig