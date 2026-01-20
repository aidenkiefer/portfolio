import type { Config } from "tailwindcss";

// TailwindCSS v4 uses CSS-first configuration via @theme directive
// This config file is kept for compatibility but most configuration
// should be done in globals.css using @theme
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};

export default config;
