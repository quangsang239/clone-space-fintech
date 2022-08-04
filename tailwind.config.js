/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { barlow: ['"Roboto Condensed"', "sans-serif"] },
      colors: {
        primary: "#222D38",
        circle: "#1DBBF9",
        page: "#F9F9F9",
        green3: "#66C900",
      },
      backgroundImage: {
        slide1: "url('/src/assets/images/l2-min.jpg')",
        slide2: "url('/src/assets/images/l5-min.jpg')",
        slide3: "url('/src/assets/images/l4-min.jpg')",
        slide4: "url('/src/assets/images/ll1-min.jpg')",
        slide5: "url('/src/assets/images/l1-min.jpg')",
        services: "url('/src/assets/images/bgrskill.jpeg')",
        "your-business": "url('/src/assets/images/parallax-bg-min.jpg')",
      },
    },
    minHeight: {
      page: "280px",
      "your-business": "420px",
    },
    maxHeight: {
      page: "280px",
      program: "500px",
    },
    maxWidth: {
      "img-service": "65px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
