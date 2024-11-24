/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1220px",
          "2xl": "1220px",
        },
      },
      colors: {
        primary: "#F0F1F1",
        secondary: "#EFF0F5",
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: {
          primary: "#434343",
          secondary: "#707070",
          light: "#f5f5f5",
          denger: "#2E2E2E",
          yellow: "#F97316",
        },
      },
    },
  },
  plugins: [],
};
