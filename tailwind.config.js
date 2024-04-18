/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0D0221',
        heroSec: '#A6CFD5',
        footerC: '#26408B',
        // Add more custom colors as needed
      },
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}