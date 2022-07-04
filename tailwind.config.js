module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		colors: {
			bg: {
				DEFAULT: 'var(----color-bg)',
				700: 'var(--color-bg-dark)',
			},
			text: { DEFAULT: 'var(--color-text)' },
			primary: { DEFAULT: 'var(--color-primary)' },
			gray: { DEFAULT: 'var(--color-disabled)' },
			transparent: '#15182180',
			overlay: '#202533c7',
		},
		extend: {
			aspectRatio: {
				'2/3': '2 / 3',
			},
		},
	},
	plugins: [],
};
