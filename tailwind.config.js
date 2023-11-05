/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8873ef",
        hadingColor: "#081e21",
        smallTextCOlor: "#193256",
      },
    },
  },
  plugins: [],
};
