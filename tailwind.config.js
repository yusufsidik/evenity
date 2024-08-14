/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"','sans-serif'],
        rubik: ['"Rubik"','sans-serif'],
        fredoka: ['"Fredoka"','sans-serif']
      },
      colors: {
        'biru-gelap': '#070148',
        'ungu': '#6D28D9'
      },
      backgroundImage: {
        'jumbotron' : "url('/img/img-jumbotron.png')"
      }
    },
  },
  plugins: [],
}

