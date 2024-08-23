/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cl_white": "#fff",
        "cl_red":  "#f96400",
        "cl_black": "#222",
        "cl_blue": "#0565bb",
        "cl_primary":"#1a58f2",
        "cl_gray":"#999",
        "cl_bg_black":"#111",
        "cl_line":"#f4f4f4"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        NotoSansCJKkr: ["noto-sans-cjk-kr","sans-serif"]
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};