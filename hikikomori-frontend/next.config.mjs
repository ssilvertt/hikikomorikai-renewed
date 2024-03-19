/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static.tildacdn.com",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "8000",
			},
			{
				protocol: 'https',
				hostname: "",
			}

			
		]
	}
};

export default nextConfig;
