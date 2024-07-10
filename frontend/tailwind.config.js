/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
           intan: ["intan", "sans-serif"],
           khujas : ["khujas", "sans-serif"],
      },
    },
  },
  plugins: [require('tailwindcss-font-inter')],
}

