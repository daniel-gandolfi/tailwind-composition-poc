/** @type {import('tailwindcss').Config} */
import config from "@daniel-gandolfi/library/dist/tailwind.config.js"
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...config.theme,
    extend: {
      ...config.extend,
      colors: {
        "asdasd": "#654321"
      }
    },
  },
  plugins: [],
}
