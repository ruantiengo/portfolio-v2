/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-pink": "0px 0px 40px #F637EC",
        "neon-blue": "0px 0px 40px #3330E4",
        "neon-yellow": "0px 0px 40px #FAEA48",
      },
      boxShadow: {
        "neon-pink": "0px 0px 40px #F637EC",
        "neon-blue": "0px 0px 40px #3330E4",
        "neon-yellow": "0px 0px 40px #FAEA48",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
