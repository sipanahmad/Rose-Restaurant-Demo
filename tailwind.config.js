/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				graya: '#646465',
				golden: '#ffda2e',
				white: '#FDFEFC',
				black: '#090900',
			},
			animation: {
				'slide-bottom':
					'slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
				rotate: 'rotate 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)  both',
				'slide-left': 'slide-l .7s cubic-bezier(0.25, 0.46, 0.45, 0.94)  both',
				'slide-right':
					'slide-r 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)  both',
			},
			fontFamily: {
				'great-vibes': ['Great Vibes', 'cursive'],
			},
			keyframes: {
				'slide-bottom': {
					'0%': {
						transform: 'translateY(-25%)',
						'-webkit-transform': 'translateY(-25%)',
					},
					'100%': {
						'-webkit-transform': 'translateY(0)',
						transform: 'translateY(0)',
					},
				},
				'slide-l': {
					'0%': {
						transform: 'translateX(-100%)',
						'-webkit-transform': 'translateX(-100%)',
					},
					'50%': {
						'-webkit-transform': 'translateX(-50%)',
						transform: 'translateX(-50%)',
					},
					'100%': {
						'-webkit-transform': 'translateX(0)',
						transform: 'translateX(0)',
					},
				},
				'slide-r': {
					'0%': {
						right: '-100%',
					},
					'50%': {
						right: '-50%',
					},
					'100%': {
						right: '0%',
					},
				},
				rotate: {
					'0%': {
						transform: 'rotate(0deg)',
						'-webkit-transform': 'rotate(0deg)',
					},
					'25%': {
						transform: 'rotate(90deg)',
						'-webkit-transform': 'rotate(90deg)',
					},
					'50%': {
						transform: 'rotate(180deg)',
						'-webkit-transform': 'rotate(180deg)',
					},
					'75%': {
						transform: 'rotate(270deg)',
						'-webkit-transform': 'rotate(270deg)',
					},
					'100%': {
						'-webkit-transform': 'rotate(360deg)',
						transform: 'rotate(360deg)',
					},
				},
			},
		},
	},
	plugins: [],
};
