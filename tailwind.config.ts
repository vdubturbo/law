import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Variant A: Premium Classical
        "va-primary": "#1A3A52",
        "va-accent": "#8B3A3A",
        "va-bg": "#F5F7FA",
        "va-text": "#1A1A1A",
        "va-muted": "#6B7280",

        // Variant B: Modern Professional
        "vb-primary": "#2C3E50",
        "vb-accent": "#4A6B5E",
        "vb-bg": "#ECF0F1",
        "vb-text": "#1A1A1A",
        "vb-muted": "#6B7280",

        // Variant C: Sophisticated Warm
        "vc-primary": "#1F2937",
        "vc-accent": "#9B7653",
        "vc-bg": "#F9F8F6",
        "vc-text": "#1A1A1A",
        "vc-muted": "#6B7280",
      },
      fontFamily: {
        // Variant A fonts
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        // Variant B fonts
        garamond: ["EB Garamond", "serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        // Variant C fonts
        syne: ["Syne", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "display": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "h2": ["2.25rem", { lineHeight: "1.2" }],
        "h3": ["1.5rem", { lineHeight: "1.3" }],
        "h4": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "small": ["0.875rem", { lineHeight: "1.6" }],
        "xs": ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "card": "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)",
        "elevated": "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.08)",
        "subtle": "0 1px 3px rgba(0, 0, 0, 0.05)",
      },
      transitionDuration: {
        "DEFAULT": "300ms",
      },
      transitionTimingFunction: {
        "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
