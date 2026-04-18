export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#003366",
          500: "#2563eb",
          700: "#1d4ed8",
        },
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgb(0 0 0 / 0.05), 0 10px 15px -5px rgb(0 0 0 / 0.05)",
        "soft-xl": "0 10px 30px -5px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
