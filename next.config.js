/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		images: { layoutRaw: true }
	},
	images: {
		domains: ['api.thecatapi.com', 'cdn2.thecatapi.com']
	}
}

module.exports = nextConfig
