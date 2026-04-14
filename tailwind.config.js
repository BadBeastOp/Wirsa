/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wirsa: {
          red: '#E11C2A',
          'red-dark': '#C41623',
          black: '#000000',
          dark: '#111111',
          card: '#161616',
          border: '#2A2A2A',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        nav: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        "7.5xl": "88rem",
        ch: "26rem",
      },
    },
  },
  plugins: [],
};