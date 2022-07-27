/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['Arial', 'sans-seriff'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url('/images/lisbon.jpg')",
      },
      height: {
        '1/5-screen': '20vh',
      },
      colors: {
        'main': '#353535',
      },
    },
  },
  plugins: [],
}
