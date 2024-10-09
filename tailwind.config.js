/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkRed: "#873636",
      },
      fontFamily: {
        sedan: ["Sedan SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
