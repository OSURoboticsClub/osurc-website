const typography = require('@tailwindcss/typography');

module.exports = {
	content: [
		'./hugo_stats.json',
		'./layouts/**/*.html',
	],
	plugins: [typography],
	theme: {
		fontFamily: {
			sans: ['IBM Plex Sans', 'sans-serif'],
			display: ['Inter', 'sans-serif'],
			mono: ['monospace'],
		},
	}
};
