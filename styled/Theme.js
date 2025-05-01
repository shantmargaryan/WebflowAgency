"use client"
const theme = {
  colors: {
    darkBlue: "#282938",
    white: "#fff",
    gray: "#f4f6fc",
    yellow: "#fcd980",
    tintBlue: "#1c1e53",
    accent: "#eef4fa",
  },
  media: {
    mobile: "min-width: 480px",
    mobileLarge: "min-width: 576px",
    tablet: "min-width: 768px",
    tabletLarge: "min-width: 992px",
    laptop: "min-width: 1024px",
    laptopLarge: "min-width: 1200px",
    desktop: "min-width: 1440px",
  },
  container: {
    width: 1280,
    offset: 15,
  },

  Response: {
    gridCustom: "repeat(auto-fit, minmax(min(100%, 31rem), 1fr))",
  },
};

export default theme;
