import type { Config } from "tailwindcss";
import tailwindColors from "tailwindcss/colors";

const colors = {
  // brand color
  white: "#ffffff",
  white2: "#FCFCFC",
  primary: "#7a3de2",
  "primary-dark": "#5228c7",
  "base-light": "#ffffff",
  base: "#f9f9f9",
  secondary: "#303030",
  "secondary-light": "#A0A0A0",

  // Black/Gray Scale
  "black-100": "#F5F5F5",
  "black-200": "#E5E5E5",
  "black-300": "#D4D4D4",
  "black-400": "#B1B1B1",
  "black-500": "#737373",
  "black-600": "#525252",
  "black-700": "#404040",
  "black-800": "#262626",
  "black-900": "#0D0D0D",

  // Gray Scale
  "gray-1": "#ECECEC",
  "gray-2": "#E3E3E3",
  "gray-3": "#E2E8F0",
  "gray-4": "#CBD5E0",
  "gray-5": "#A0AEC0",
  "gray-6": "#718096",
  "gray-7": "#515151",
  "gray-8": "#2D3748",
  "gray-9": "#1A202C",
};
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        xl: "80px",
        "2xl": "120px",
        "3xl": "160px",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        ...colors,
        ...tailwindColors,
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(0deg, #7A3DE2 0%, #43217C 100%)",
      },
      borderRadius: {
        base: "8px",
        md: "16px",
      },
      fontSize: {
        "3xs": "8px",
        "2xs": "10px",
        xs: "12px",
        sm: "14px",
        "2sm": "16px",
        "base-lg": "18px",
        lg: "20px",
        xl: "24px",
      },
      fontFamily: {
        iransans: ["var(--font-iransans)"],
      },
    },
  },
  plugins: [],
};
export default config;
