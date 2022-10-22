module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,mjs,jsx,ts,tsx,svelte}', './public/index.html'],
	safelist: [],
	// whitelistPatterns: [/svelte-/],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['dark', 'light'],
		logs: false
	},
	plugins: [require('daisyui')]
};
