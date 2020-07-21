import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: "Alegreya Sans SC",
      styles: ["400", "400i", "700", "700i"],
    },
    {
      name: "Alegreya",
      styles: ["400", "400i", "700", "700i"],
    },
    {
      name: "Ovo",
      styles: ["400"],
    },
  ],
  headerFontFamily: [
    "Alegreya Sans SC",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Ovo", "Georgia", "serif"],
  blockMarginBottom: `1rem`,
  scaleRatio: 2.5,
})

export default typography
