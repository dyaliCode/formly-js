const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '390px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'solid': '#2c4f7c'
      }
    },
  },
  plugins: [],
}
