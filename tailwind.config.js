/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        xl: "918px",
        "2xl": "1520px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
