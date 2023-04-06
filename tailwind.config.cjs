/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      main: ["Roboto", "sans-serif"],
      custom: ['"Courier Prime"', "sans-serif"],
    },
  },
  plugins: [],
};
