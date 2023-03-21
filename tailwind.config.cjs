/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'ubuntu': ['Ubuntu']
      },
      colors: {
        blk: '#141414',
        wht: "#ffffff",
        gry: "#131313",
        rd: "#f8271a",
        orng: "#f6921a",
        accent: "#df9328",
      },
      boxShadow: {
        glow: "0 0 1000px 80px rgba(223,147,40,0.7)",
      },
      dropShadow: {
        bulbGlow: "0 0 30px rgba(223, 147, 40, 0.4)",
        accentGlow: '0 0 5px #df9328',
        whiteGlow: '0 0 5px #ffffff',
        hover: '0 3px 0 #df9328',
      },
    },
  },
  plugins: [],
}