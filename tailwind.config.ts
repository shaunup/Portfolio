import type { Config } from "tailwindcss";

// Note: With Tailwind CSS v4, most theme configuration is done in CSS via @theme.
// This file is kept for compatibility with tools that expect a config file.
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
