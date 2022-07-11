module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		colors: {
			bg: {
				DEFAULT: 'var(--color-bg)',
				700: 'var(--color-bg-dark)',
			},
			text: { DEFAULT: 'var(--color-text)' },
			primary: { DEFAULT: 'var(--color-primary)' },
			gray: { DEFAULT: 'var(--color-disabled)' },
			transparent: '#13161E80',
			overlay: 'var(--grey-1000)',
			// overlay: '#20253380',
		},
		extend: {
			aspectRatio: {
				'2/3': '2 / 3',
			},
		},
	},
	plugins: [],
};
