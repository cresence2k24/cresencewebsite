module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      // xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        // about: "url('./assets/about.png')",
        // events: "url('./assets/events.png')",
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        "gradient" :{
          "0": {
            backgroundPosition: "0% 50%"
          },
          '50' :{
            backgroundPosition: "100% 50%"
          },
          '100': {
            backgroundPosition: "0% 50%"
          }
        }
      }
    },
  },
  plugins: [],
};
