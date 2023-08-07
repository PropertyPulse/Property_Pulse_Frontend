/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "primary-blue-800": "#012A4A",
        "primary-blue-500": "#01497C",
        "background-blue": "#FAFBFD",
        "selected": "#D7E3FC",
        "secondary-gray": "#495057",
        "secondary-gray-light": "#8E8F91",
        "success-green": "#2D9F46",
        "error-red": "#B91C1C",
        "content-bg":"#FAFBFD"
      }
    },
  },
  plugins: [],
}