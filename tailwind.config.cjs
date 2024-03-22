module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
      xxl: "1440px",
      sl: "2560px",
    },
    extend: {
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        "t-banner": "url('/assets/images/Home Trump Banner.png')",
        "work-banner-1": "url('/assets/images/Classic orange Bg.png')",
        "work-banner-2": "url('/assets/images/Orangy Wave Bg.png')",
        "cta-banner": "url('/assets/images/Start Project Bg.png')",
      },
    },
  },
},
  plugins: [],
};
