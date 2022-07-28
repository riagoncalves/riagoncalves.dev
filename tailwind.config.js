/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Arial', 'sans-seriff'],
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.333%',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url('/images/lisbon.jpg')",
        'divider': "linear-gradient(90deg,transparent 0,#fff 50%,transparent)",
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
