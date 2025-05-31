
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
        // Ocean to forest color palette based on your gradient
        ocean: {
          50: "#e6f0f5",
          100: "#cce1eb",
          200: "#99c3d7",
          300: "#66a5c3",
          400: "#3387af",
          500: "#003b5c",
          600: "#002f4a",
          700: "#002338",
          800: "#001726",
          900: "#000b14",
          950: "#000509",
        },
        forest: {
          50: "#e6f2f1",
          100: "#cce5e3",
          200: "#99cbc7",
          300: "#66b1ab",
          400: "#33978f",
          500: "#1f5f5b",
          600: "#194c49",
          700: "#133937",
          800: "#0d2625",
          900: "#071312",
          950: "#030909",
        },
        // Your specific gradient colors
        gradient: {
          50: "#e6f1f3",
          100: "#cce3e7",
          200: "#99c7cf",
          300: "#66abb7",
          400: "#338f9f",
          500: "#003b5c", // Primary ocean blue
          600: "#1f5f5b", // Primary forest green
          700: "#194c49",
          800: "#133937",
          900: "#0d2625",
          950: "#071312",
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
        "gradient-flow": {
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
        "shimmer": "shimmer 3s linear infinite",
        "gradient-flow": "gradient-flow 8s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Your specific gradient
        "ocean-to-forest": "linear-gradient(to right, #003b5c, #1f5f5b)",
        "ocean-to-forest-reverse": "linear-gradient(to right, #1f5f5b, #003b5c)",
        "ocean-to-forest-vertical": "linear-gradient(to bottom, #003b5c, #1f5f5b)",
        "ocean-to-forest-diagonal": "linear-gradient(135deg, #003b5c, #1f5f5b)",
        "ocean-to-forest-subtle": "linear-gradient(to right, rgba(0, 59, 92, 0.1), rgba(31, 95, 91, 0.1))",
        "medical-gradient": "linear-gradient(to right, #003b5c, #1f5f5b)",
      },
      backgroundSize: {
        "200%": "200% 200%",
        "300%": "300% 300%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
