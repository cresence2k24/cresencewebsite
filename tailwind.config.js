module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('./assets/Images/site-bg.webp')",
        hero: "url('./assets/Images/hero-banner.jpg')",
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 9s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          from: { transform: "translateX(0)" },
          to: {
            transform: "translateX(calc(-250px * 3))",
          },
        },
      }
    },
  },
  plugins: [],
};
