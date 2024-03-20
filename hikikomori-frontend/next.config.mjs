/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost'],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static.tildacdn.com",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "8000",
				pathname: '/storage/product_images/**'
			},
			{
				protocol: 'https',
				hostname: "",
			}

			
		]
	}
};

export default nextConfig;
