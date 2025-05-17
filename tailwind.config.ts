
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Hive custom colors
				honey: {
					light: '#FEF3C7',
					DEFAULT: '#FFC107',
					dark: '#F59E0B',
				},
				amber: {
					light: '#FEFCE8',
					DEFAULT: '#FFD700',
					dark: '#D97706',
				},
				orange: {
					light: '#FFEDD5',
					DEFAULT: '#FF9800',
					dark: '#EA580C',
				},
				teal: {
					light: '#CCFBF1',
					DEFAULT: '#008080',
					dark: '#0F766E',
				},
				lavender: {
					light: '#F3E8FF',
					DEFAULT: '#E6E6FA',
					dark: '#A78BFA',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"buzz": {
					"0%, 100%": { transform: "translateX(0)" },
					"10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
					"20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
				},
				"honey-drip": {
					"0%": { transform: "translateY(-10px)", opacity: "0" },
					"70%": { transform: "translateY(0)", opacity: "1" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
				"hex-pulse": {
					"0%, 100%": { transform: "scale(1)", opacity: "1" },
					"50%": { transform: "scale(1.05)", opacity: "0.9" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"buzz": "buzz 0.5s ease-in-out",
				"honey-drip": "honey-drip 1s ease-out",
				"hex-pulse": "hex-pulse 2s ease-in-out infinite",
				"float": "float 3s ease-in-out infinite",
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
