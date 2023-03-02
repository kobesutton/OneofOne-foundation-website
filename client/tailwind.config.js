module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [
      require('tw-elements/dist/plugin'),
      require('tailwind-scrollbar-hide')
    ],
  }