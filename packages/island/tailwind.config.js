const baseTheme = require("@daniel-gandolfi/library/dist/tailwind.config.js");
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx,css}'],
    presets: [
      baseTheme
    ],
    theme: {
      extends:{}
    },
    corePlugins: {
      preflight: false
    }
  }