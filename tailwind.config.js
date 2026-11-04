module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#07050d'
        },
        secondary: {
          DEFAULT: '#0d0a17'
        }
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
