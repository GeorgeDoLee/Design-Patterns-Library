/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primaryText: '#333333',  // Used for body text and background elements
        accent: '#3B82F6',  // Used for links, buttons, and interactive elements
        backgroundWhite: '#FFFFFF', // Used for backgrounds and highlights
      }
    },
  },
  plugins: [],
}
