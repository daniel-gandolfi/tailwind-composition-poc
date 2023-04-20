module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx,css,scss}'],
    theme: {
      extend: {
        screens: {
            zero: '0px',
            xxs: '240px',
            xs: '360px',
            sm: '768px',
            md: '1024px',
            lg: '1368px',
            xl: '1920px',
            xxl: '2560px',
        },
        colors: {
          primary: "hsl(var(--primary) / <alpha-value>)",
          primaryLight: "hsl(var(--primaryLight) / <alpha-value>)",
          secondary: "hsl(var(--secondary) / <alpha-value>)",
          secondaryLight: "hsl(var(--secondaryLight) / <alpha-value>)"
        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          caveat: ['Caveat', 'cursive'],
        },
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  }