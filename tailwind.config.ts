import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        "slide-out-fwd-center":
          "slide-out-fwd-center 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "scale-in-center":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        "slide-out-fwd-center": {
          "0%": {
            transform: "translateZ(1)",
            opacity: "1",
          },
          to: {
            transform: "translateZ(600px)",
            opacity: "0",
          },
        },
        "scale-in-center": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
};

export default config;
