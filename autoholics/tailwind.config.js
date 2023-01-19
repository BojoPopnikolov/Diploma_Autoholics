/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/ui/*.{js,ts,jsx,tsx}',
    './components/listings/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'green-theme': '#8dc6bf',
        'purple-theme': {
          light: '#8a7986',
          DEFAULT: '#584053',
          dark: '#3d2c3a',
        },
        'yellow-theme': '#fcbc66',
        'orange-theme': {
          light: '#faa283',
          DEFAULT: '#f97b4f',
          dark: '#c7623f',
        },
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
