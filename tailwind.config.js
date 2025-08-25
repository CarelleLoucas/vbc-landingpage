/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        brandBlue: "#1890ff",
        brandOrange: "#ff8a3d"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, .08)"
      }
    },
  },
  plugins: [],
}
