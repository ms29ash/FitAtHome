module.exports = {
  content: ["./src/**/*.{html,js}",
    "./src/Components/**/*.js"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      '3xl': '2000px'
    },
    extend: {
      fontFamily: {
        font: [
          'Open Sans', 'sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',]
      },
      colors: {

        'redfood': '#bf0404',
        'orangefood': '#f23005',
        'greenfood': '#467302',
        'grayfood': '#263224',
        'lorangefood': '#f94d27',

      }
    },
  },
  plugins: [],
}
