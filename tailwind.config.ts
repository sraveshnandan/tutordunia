import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        signup: "url('./src/assets/images/hero_bg.png')"
      },
      colors: {
        primary: "#006ef7",
        secondry: "#dbebff",
        grey: "#6c6c6c",
        text: "#3c3c3c",
        green: "#00d59d",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
