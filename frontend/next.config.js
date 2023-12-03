/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['com.unsplash.cdn', 'images.unsplash.com', 'plus.unsplash.com'],
    },
}

module.exports = nextConfig
