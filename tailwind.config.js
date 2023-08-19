/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#E527B2",
        "text-color": "#111111",
        "gray-color": "rgba(17, 17, 17, 0.50)",
        "star-color": "#FFC107",
        "banner-bg": "#F9F6E2",
        "card-bg": "rgba(17, 17, 17, 0.05)",
        "body-bg": "#F8F8F8",
      },
      fontFamily: {
        "work-sans": "'Work Sans', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
