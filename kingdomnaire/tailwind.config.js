/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin:{
        '120':'40rem',
        '130': '44rem',
        '100': '35rem',
        '85': '22rem',
        '18': '4.5rem',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

