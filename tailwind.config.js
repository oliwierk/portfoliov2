/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./about.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"time-bus": "url('/TimeBus.jpg')",
			},
		},
	},
	plugins: [],
};
