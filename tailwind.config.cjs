module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#07080b",
        card: "rgba(255,255,255,0.04)",
        glass: "rgba(255,255,255,0.03)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(0deg, rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
}
