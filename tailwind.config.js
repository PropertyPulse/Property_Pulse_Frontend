/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "primary-blue-800": "#012A4A",
        "primary-blue-500": "#01497C",
        "background-blue": "#EDFAFB",
        "selected": "#D7E3FC",
        "secondary-gray": "#495057",
        "success-green": "#2d9f46",
        "error-red": "#B91C1C"
      }
    },
  },
  plugins: [],
}

