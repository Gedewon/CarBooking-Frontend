/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Montserrat, sans-serif',
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
    extend: {
      gridTemplateColumns: {
        responsive: 'repeat(auto-fit,minmax(280px,1fr))',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line
    require('flowbite/plugin'),
  ],
};
