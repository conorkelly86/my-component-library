module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx}", "app/**/*"],
  theme: {
    extend: {
      spacing: {
        "25%": "25%", // p-80% - should work
      },
    },
  },
  plugins: [],
};
