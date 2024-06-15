/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./about.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"portfolio-v1": "url('/mockup1.png')",
				"lorem-bg": "url('/lorem.png')",
				webvisionary: "url('/WebVisionary.png')",
			},
		},
	},
	plugins: [],
};
