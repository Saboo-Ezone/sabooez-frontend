/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.75rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem',
      },
      fontWeight: {
        h1: 'bold',
        h2: 'bold',
        h3: 'bold',
        h4: 'bold',
        h5: 'bold',
        h6: 'bold',
      },
      lineHeight: {
        h1: '2.75rem',
        h2: '2.25rem',
        h3: '2rem',
        h4: '1.75rem',
        h5: '1.5rem',
        h6: '1.25rem',
      },
      animation: {
        shake: 'shake 0.2s ease-in-out 0s 2',
      },
      keyframes: {
        shake: {
          '0%': { marginLeft: '0rem' },
          '25%': { marginLeft: '1rem' },
          '75%': { marginLeft: '-1rem' },
          '100%': { marginLeft: '0rem' },
        },
      },
    },
  },
  plugins: [],
};
