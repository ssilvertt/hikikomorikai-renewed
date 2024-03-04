import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['var(--font-raleway)'],
				hikika: ['var(--font-hikka)'],
			}
		},
	},
	plugins: [],
};
export default config;
