/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [
    require("@daniel-gandolfi/library/dist/tailwind.config.js")
  ],
  corePlugins: {
      preflight: false
  },
  theme: {
    extend: {
      colors: {
        "asdasd": "#654321"
      }
    },
  }
}
