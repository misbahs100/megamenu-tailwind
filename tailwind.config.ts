import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				heroPattern: "url('/hero-pattern.png')",
				honeymoon: "url('/honeymoon.jpg')",
				weekend: "url('/weekend.jpg')",
				family: "url('/family.jpg')",
			},
		},
	},
	plugins: [],
};
export default config;
