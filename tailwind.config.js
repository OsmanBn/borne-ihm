/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0f1b3d",
        brand: {
          blue: "#1A5276",
          orange: "#E8770D",
          red: "#C0392B",
          green: "#1E8449",
        },
      },
    },
  },
  plugins: [],
}

