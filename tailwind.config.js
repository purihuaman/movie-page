module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      bg: {
        DEFAULT: '#151922',
        700: '#171c26',
      },
      text: { DEFAULT: '#f2f2f7' },
      primary: { DEFAULT: '#0099ff' },
      gray: { DEFAULT: '#8b8e93' },
      transparent: '#15192280',
      overlay: '#1d1e26c7',
    },
    extend: {
      aspectRatio: {
        '2/3': '2 / 3',
      },
    },
  },
  plugins: [],
};
