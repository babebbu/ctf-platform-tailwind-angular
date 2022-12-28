const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1650px',
        '4xl': '1900px',
      },
      colors: {
        neutral: {
          // 50: '#eee',
          // 100: '#ddd',
          // 200: '#ccc',
          // 300: '#bbb',
          // 400: '#aaa',
          // 500: '#777',
          // 600: '#444',
          700: '#1e222c',
          // 800: '#0a0c10',
          800: '#0e1015',
          900: '#08080b',
        },
      }
    },
  },
  plugins: [],
}
