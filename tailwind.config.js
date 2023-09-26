/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#00FFD4',
        blue: '#00FF98',
        grey: '#919191',
        cinza: '#f2f2f2',
        pretin: '#202020',
        cyberpunk: '#FC427B',
        icon1: '#12CBC4',
        icon2: '#C4E538',
        icon3: '#ED4C67',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'exo2': ['Exo 2', 'sans-serif']
      },
    },
  },
  plugins: [],
}
