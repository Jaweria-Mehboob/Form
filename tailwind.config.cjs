/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('./src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
