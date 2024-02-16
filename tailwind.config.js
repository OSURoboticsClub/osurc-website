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
		fontSize: {
			base: '14px',
			sm: '12px',
			xs: '10px',
			h3: '24px',
			h2: '48px',
			h1: '64px',
		}
	}
};
