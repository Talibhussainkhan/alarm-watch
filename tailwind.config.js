/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,ts,jsx,tsx}', // Path to all of your template files
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3490dc', // Custom color
          secondary: '#ffed4a', // Another custom color
        },
        spacing: {
          '72': '18rem', // Custom spacing
          '84': '21rem', // Another custom spacing
          '96': '24rem', // Another custom spacing
        },
      },
    },
    plugins: [],
  }
  