/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
    },
  },
};
