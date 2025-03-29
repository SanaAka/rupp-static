/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        khmer: ['Khmer', 'sans-serif'],
        nerko: ['Nerko One', 'cursive'],
        sf: ['SF Pro Display', 'sans-serif'], // Add the custom font here
      },
      colors:{
        chemjruk: '#821F1F',
      }
    },
  },
  plugins: [],
};
