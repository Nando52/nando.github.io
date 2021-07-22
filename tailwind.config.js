const colors = require(`tailwindcss/colors`);
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { colors: { sky: colors.sky, cyan: colors.cyan } }  // here use `colors`},
  },
  variants: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {},
  plugins: [],
}
