/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      "3xl": "2000px",
    },
    extend: {
      fontFamily: {
        font: [
          "Open Sans",
          "sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
      },
      colors: {
        ssorange: "#ff8e27",
        ssgreen: "#00a850",
        redfood: "#bf0404",
        orangefood: "#f23005",
        greenfood: "#467302",
        grayfood: "#263224",
        lorangefood: "#f94d27",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        review:
          " rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
