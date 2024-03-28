/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./about.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"portfolio-v1": "url('/portfoliov1.png')",
				"lorem-bg": "url('/lorem.png')",
			},
		},
	},
	plugins: [],
};
