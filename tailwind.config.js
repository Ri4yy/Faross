/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./*.{html,js}",
    "./pages/*.{html,js}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'main-orange':'#EF3900',
        'title':'#54595F',
        'secondary':'#1F1F1F',
        'subtitle':'#333333'
      },
    },
    container: {
      padding: {
        DEFAULT: '16px',
        xl: '20px'
      },
      center: true
    }
  },
  plugins: [],
}
