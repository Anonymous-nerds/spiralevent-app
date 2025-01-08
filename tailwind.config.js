/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      keyframes: {
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: { 'loading': 'loading 2s ease-in-out infinite', },

      fontFamily: { "nunito-eb": ['"Nunito"', "sans-serif"], },
      colors: { primary: "#831843", secondary: "#fb923c", },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "2rem", lg: "4rem", xl: "5rem", "2xl": "6rem", },
      },
    },
    animation: { 'loading': 'loading 2s ease-in-out infinite', }
  },
  plugins: [],
};
