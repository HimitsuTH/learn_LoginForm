/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueD: "#7289da",
        blueD2: "#5865F2",
        blueDH: "#4d5cf8",
        "black-1": "#424549",
        "black-2": "#36393e",
        "black-3": "#282b30",
        "black-4": "#1e2124",
      },
    },
  },
  plugins: [],
};
