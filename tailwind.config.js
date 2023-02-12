/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,jsx}",
    "./src/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/typography')
  ],
}
