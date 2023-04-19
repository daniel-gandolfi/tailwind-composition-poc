module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
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
          //https://www.canva.com/colors/color-palettes/frozen-berries/
          "misty-blue":'#B0B7C0',
          'black': '#171710',
          'gray': '#707370',
          'gunmetal-gray': '#595E60',
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