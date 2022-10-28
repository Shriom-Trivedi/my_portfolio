/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        circular__std__book: [
          '"Circular Std Book"',
          ...defaultTheme.fontFamily.sans,
        ],
        mark__pro: ['"Mark Pro"', ...defaultTheme.fontFamily.sans],
        d__din__Condensed: ['"D-DIN Condensed"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            backgroundPositionX: '0px',
            backgroundPositionY: '50%',
          },
          '50%': {
            backgroundPositionX: '100%',
            backgroundPositionY: '50%',
          },
        },
      },
      animation: {
        linearGrad: 'gradient 3s ease infinite',
      },
    },
  },
  plugins: [],
};
