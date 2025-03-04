import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#27445D",
        lightGray: "#FAFAFA",
        charcoalGray: "#5C5757",
        lightGrayShade: "#D9D9D9",
        lightGrayShade2: "#E8E8E8",
        yellow: "#FFDB58",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
