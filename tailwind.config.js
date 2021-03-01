module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#a5a251",
        secondary: "#f3e6d4",
       
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
