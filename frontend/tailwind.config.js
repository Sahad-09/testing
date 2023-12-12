/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["night", "acid"],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")]
};
