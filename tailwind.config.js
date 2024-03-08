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
			display: ['Barlow Condensed','Inter', 'sans-serif'],
			mono: ['monospace'],
		},
		fontSize: {
			base: '14px',
			sm: '12px',
			xs: '10px',
			h4: '24px',
			h3: '32px',
			h2: '52px',
			'h1.5': '72px',
			h1: '86px',
		},
		extend: {
			colors: {
				'primary': '#E58847'
			},
			spacing: {
				navbar: '64px',
			}
		}
		
	}
};
