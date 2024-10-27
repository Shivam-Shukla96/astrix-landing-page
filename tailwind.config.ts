import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        rotate: "rotate 4s linear infinite",
        shineMovement: "shineMovement 12s infinite ease-in-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        rotate: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        shineMovement: {
          "0%": {},
          "100%": {
            backgroundPosition: "20% 20%, 80% 80%, 50% 50%",
            backgroundSize: "100% 100%, 100% 100%, 100% 100%",
          },
          "20%": {
            backgroundPosition: "50% 20%, 30% 90%, 80% 10%",
            backgroundSize: "150% 150%, 150% 150%, 150% 150%",
          },
          "40%": {
            backgroundPosition: "80% 30%, 20% 20%, 50% 80%",
            backgroundSize: "200% 200%, 200% 200%, 200% 200%",
          },
          "60%": {
            backgroundPosition: "30% 50%, 70% 20%, 40% 60%",
            backgroundSize: "150% 150%, 150% 150%, 150% 150%",
          },
          "80%": {
            backgroundPosition: "20% 80%, 80% 50%, 30% 30%",
            backgroundSize: "100% 100%, 100% 100%, 100% 100%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
