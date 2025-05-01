import rtl from "tailwindcss-rtl";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      yekan: ["Yekan Bakh", "sans-serif"],
    },

    fontSize: {
      headlineLg: "56px",
      headlineMd: "48px",
      headlineSm: "40px",
      titleLg: "32px",
      titleMd: "24px",
      titleSm: "20px",
      bodyLg: "18px",
      bodyMd: "16px",
      bodySm: "14px",
      labelLg: "16px",
      labelMd: "14px",
      labelSm: "12px",
    },

    // رنگ‌ها (با تنظیمات shadcn و استایل گاید شما)
    colors: {
      primary: {
        DEFAULT: "#005FF0",
        50: "#F2F7FF",
        100: "#E3EDFC",
        200: "#BDD4FC",
        300: "#96D0FA",
        400: "#499CF5",
        600: "#0053D9",
        700: "#003EB3",
        800: "#002D8F",
        900: "#001E6B",
        950: "#001145",
      },
      secondary: {
        DEFAULT: "#FFA200",
        50: "#FFFDF2",
        100: "#FFFAE6",
        200: "#FFF1BF",
        300: "#FFE699",
        400: "#FFC94D",
        600: "#E68E00",
        700: "#BF6C00",
        800: "#994F00",
        900: "#733600",
        950: "#4A1F00",
      },
      neutral: {
        white: "#FFFFFF",
        black: "#0C0C0C",
        50: "#F9FBFC",
        100: "#F5F8FC",
        200: "#F3F3F3",
        300: "#E9EFF4",
        400: "#E0E6F2",
        500: "#DAE4ED",
        600: "#D3DEE9",
        700: "#CCD9E5",
        800: "#C4D3E2",
        900: "#BDCEDC",
        text: {
          200: "#D3DBE0",
          400: "#98A2B3",
          500: "#667085",
          900: "#101828",
        },
      },
      error: {
        100: "#FDEAE9",
        200: "#FAC1BD",
        300: "#F79790",
        400: "#F36E64",
        500: "#F04438",
      },
      success: {
        100: "#E0FCEF",
        200: "#A1F6CE",
        300: "#63F0AE",
        400: "#24E98D",
        500: "#12B76A",
      },
      warning: {
        100: "#FEF3E4",
        200: "#FCDAAD",
        300: "#FBC176",
        400: "#F9A940",
        500: "#F79009",
      },
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      primaryForeground: "hsl(var(--primary-foreground))",
      secondaryForeground: "hsl(var(--secondary-foreground))",
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      chart: {
        1: "hsl(var(--chart-1))",
        2: "hsl(var(--chart-2))",
        3: "hsl(var(--chart-3))",
        4: "hsl(var(--chart-4))",
        5: "hsl(var(--chart-5))",
      },
    },

    // drop shadows from style guide figma
    boxShadow: {
      drop: "0px 4px 16px rgba(0, 45, 143, 0.12)",
    },

    // borderRadius from style guide figma
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },

  plugins: [require("tailwindcss-animate"), rtl],
};

//
//
//
// /** @type {import('tailwindcss').Config} */
// export default {
//     darkMode: ["class"],
//     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//   	extend: {
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		},
//   		colors: {
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))'
//   			}
//   		}
//   	}
//   },
//   plugins: [require("tailwindcss-animate")],
// };
