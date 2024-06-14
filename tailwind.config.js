/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio"),require('@tailwindcss/forms')],
};
