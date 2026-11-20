/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./index.html", "./assets/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        line: token("line"),
        fg: token("fg"),
        muted: token("muted"),
        accent: token("accent"),
        "accent-ink": token("accent-ink"),
      },
      maxWidth: { site: "72rem" },
    },
  },
  plugins: [],
};
