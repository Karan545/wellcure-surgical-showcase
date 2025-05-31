
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Deep ocean blue to forest green color palette
        ocean: {
          50: "#f0fdf9",
          100: "#ccfdf7",
          200: "#99fbf2",
          300: "#5ef5ea",
          400: "#2de5db",
          500: "#14c9c1",
          600: "#0ba5a0",
          700: "#0d8580",
          800: "#115e5c",
          900: "#134e4c",
          950: "#042f2e",
        },
        forest: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        earth: {
          50: "#f0fdf6",
          100: "#dcfcf0",
          200: "#bbf7e1",
          300: "#86efca",
          400: "#4ddeb0",
          500: "#22c995",
          600: "#16a87a",
          700: "#158663",
          800: "#166b51",
          900: "#145843",
          950: "#073227",
        },
        medical: {
          50: "#f0fdf9",
          100: "#ccfdf7",
          200: "#99fbf2",
          300: "#5ef5ea",
          400: "#2de5db",
          500: "#14c9c1",
          600: "#0ba5a0",
          700: "#0d8580",
          800: "#115e5c",
          900: "#134e4c",
          950: "#042f2e",
        },
        teal: {
          50: "#f0fdf9",
          100: "#ccfdf7",
          200: "#99fbf2",
          300: "#5ef5ea",
          400: "#2de5db",
          500: "#14c9c1",
          600: "#0ba5a0",
          700: "#0d8580",
          800: "#115e5c",
          900: "#134e4c",
          950: "#042f2e",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "shimmer": {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        "earth-flow": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "earth-flow": "earth-flow 6s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "medical-gradient": "linear-gradient(135deg, #0d8580 0%, #14c9c1 50%, #22c995 100%)",
        "teal-gradient": "linear-gradient(135deg, #042f2e 0%, #115e5c 25%, #0d8580 50%, #14c9c1 75%, #22c995 100%)",
        "earth-gradient": "linear-gradient(135deg, #0d4f5c 0%, #0d8580 25%, #14c9c1 50%, #22c995 75%, #16a34a 100%)",
        "ocean-to-forest": "linear-gradient(135deg, #042f2e 0%, #0d4f5c 20%, #0d8580 40%, #14c9c1 60%, #22c995 80%, #16a34a 100%)",
        "earth-space": "linear-gradient(135deg, #073227 0%, #0d4f5c 15%, #0d8580 30%, #14c9c1 45%, #22c995 60%, #4ade80 75%, #16a34a 90%, #14532d 100%)",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
