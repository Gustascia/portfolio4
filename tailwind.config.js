/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FCE4C5",
        secondary: "#e3e0f3",
        tertiary: "#F9C784",
        "black-100": "#faf8ff",
        "black-200": "#FCE4C5",
        "white-100": "#000000",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
      'sm': '640px',
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg2.jpg')",
      },
    },
  },
  plugins: [],
};