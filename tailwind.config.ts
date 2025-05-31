
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
        // Deep ocean blue color palette
        ocean: {
          50: "#e6f3ff",
          100: "#cce6ff",
          200: "#99ccff",
          300: "#66b3ff",
          400: "#3399ff",
          500: "#006bb3",
          600: "#005299",
          700: "#004080",
          800: "#003366",
          900: "#002244",
          950: "#001122",
        },
        // Forest green color palette
        forest: {
          50: "#e6ffe6",
          100: "#ccffcc",
          200: "#99ff99",
          300: "#66ff66",
          400: "#33ff33",
          500: "#228B22",
          600: "#1e7a1e",
          700: "#1a6b1a",
          800: "#165c16",
          900: "#124d12",
          950: "#0e3e0e",
        },
        // Gradient combination colors
        gradient: {
          50: "#e6f9ff",
          100: "#ccf3ff",
          200: "#99e6ff",
          300: "#66d9ff",
          400: "#33ccff",
          500: "#00bfff",
          600: "#228B22",
          700: "#1e7a1e",
          800: "#1a6b1a",
          900: "#165c16",
          950: "#124d12",
        },
        medical: {
          50: "#e6f3ff",
          100: "#cce6ff",
          200: "#99ccff",
          300: "#66b3ff",
          400: "#3399ff",
          500: "#006bb3",
          600: "#005299",
          700: "#004080",
          800: "#003366",
          900: "#002244",
          950: "#001122",
        },
        teal: {
          50: "#e6f3ff",
          100: "#cce6ff",
          200: "#99ccff",
          300: "#66b3ff",
          400: "#3399ff",
          500: "#006bb3",
          600: "#005299",
          700: "#004080",
          800: "#003366",
          900: "#002244",
          950: "#001122",
        },
        earth: {
          50: "#e6f9ff",
          100: "#ccf3ff",
          200: "#99e6ff",
          300: "#66d9ff",
          400: "#33ccff",
          500: "#00bfff",
          600: "#228B22",
          700: "#1e7a1e",
          800: "#1a6b1a",
          900: "#165c16",
          950: "#124d12",
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
        "ocean-to-forest": "linear-gradient(135deg, #003366 0%, #004080 20%, #005299 40%, #006bb3 60%, #228B22 80%, #006400 100%)",
        "ocean-to-forest-reverse": "linear-gradient(135deg, #006400 0%, #228B22 20%, #006bb3 40%, #005299 60%, #004080 80%, #003366 100%)",
        "ocean-to-forest-horizontal": "linear-gradient(90deg, #003366 0%, #004080 25%, #005299 50%, #228B22 75%, #006400 100%)",
        "ocean-to-forest-vertical": "linear-gradient(180deg, #003366 0%, #004080 25%, #005299 50%, #228B22 75%, #006400 100%)",
        "ocean-to-forest-subtle": "linear-gradient(135deg, #e6f3ff 0%, #cce6ff 25%, #b3d9ff 50%, #e6ffe6 75%, #ccffcc 100%)",
        "medical-gradient": "linear-gradient(135deg, #003366 0%, #228B22 100%)",
        "teal-gradient": "linear-gradient(135deg, #003366 0%, #004080 25%, #005299 50%, #228B22 75%, #006400 100%)",
        "earth-gradient": "linear-gradient(135deg, #003366 0%, #004080 25%, #005299 50%, #228B22 75%, #006400 100%)",
        "earth-space": "linear-gradient(135deg, #003366 0%, #004080 20%, #005299 40%, #006bb3 60%, #228B22 80%, #006400 100%)",
      },
      backgroundSize: {
        "200%": "200% 200%",
        "300%": "300% 300%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
