module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.333%'
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url('/images/lisbon.jpg')",
        divider: 'linear-gradient(90deg,transparent 0,#fff 50%,transparent)',
        space: 'radial-gradient(circle, #003366 0%, #000000 100%)'
      },
      height: {
        '1/5-screen': '20vh'
      },
      colors: {
        main: {
          DEFAULT: '#333333'
        }
      },
    }
  },
  plugins: []
}
