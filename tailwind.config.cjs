module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,mjs,jsx,ts,tsx,svelte}', './public/index.html'],
	safelist: [],
	// whitelistPatterns: [/svelte-/],
	theme: {
		extend: {
			animation: {
				text: 'text 5s ease infinite'
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				}
			}
		}
	},
	daisyui: {
		themes: ['dark', 'light'],
		logs: false
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
