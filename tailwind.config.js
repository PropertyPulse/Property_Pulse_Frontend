/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        "primary-blue-800": "#012A4A",
        "primary-blue-700": "#052147",
        "primary-blue-500": "#01497C",
        "primary-blue-400": "#d9e2f3",
        "background-blue": "#EDF2FB",
        "secondary-gray": "#495057",
        "success-green": "#2d9f46",
        "error-red": "#B91C1C",
        "selected-area-blue":"#d9e2f3",
        "unselected-area-blue":"#ebeff3",
        "menu-area-blue":"#f1f6f6",
        "dark-black":"#2c2c2c",
        "grey-black":"#7f7f7f",
        

      }
    },
  },
  plugins: [],
}

