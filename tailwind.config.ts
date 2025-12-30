import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary green - keeping the brand color
        primary: {
          DEFAULT: '#62c3a4',
          50: '#f0faf7',
          100: '#d9f2ea',
          200: '#b3e5d5',
          300: '#8dd8c0',
          400: '#62c3a4',
          500: '#4aa88a',
          600: '#3b8a70',
          700: '#2d6b56',
          800: '#1f4c3d',
          900: '#102e24',
        },
        // Secondary darker green
        secondary: {
          DEFAULT: '#3b7562',
          50: '#f0f7f5',
          100: '#d9ebe6',
          200: '#b3d7cd',
          300: '#8dc3b4',
          400: '#4e9c83',
          500: '#3b7562',
          600: '#2f5e4e',
          700: '#23463b',
          800: '#172f27',
          900: '#0c1714',
        },
        // Light theme backgrounds
        light: {
          DEFAULT: '#f8faf9',
          50: '#ffffff',
          100: '#f8faf9',
          200: '#f0f5f2',
          300: '#e5ede9',
          400: '#d4e0da',
          500: '#c0d1c8',
          600: '#a8bfb3',
          700: '#8fa99c',
          800: '#769385',
          900: '#5d7d6e',
        },
        // Text colors for light theme
        text: {
          DEFAULT: '#1a2e28',
          primary: '#1a2e28',
          secondary: '#5a6b66',
          muted: '#8a9b96',
          light: '#a8b5b0',
        },
        // Accent mint color
        mint: {
          DEFAULT: '#c8e6d8',
          50: '#f5fbf8',
          100: '#e8f5ef',
          200: '#c8e6d8',
          300: '#a8d7c1',
          400: '#88c8aa',
          500: '#68b993',
          600: '#4e9c7a',
          700: '#3d7a60',
          800: '#2c5846',
          900: '#1b362c',
        },
        // Keep dark for specific elements if needed
        dark: {
          DEFAULT: '#1a2e28',
          50: '#f8faf9',
          100: '#e5ede9',
          200: '#c0d1c8',
          300: '#8fa99c',
          400: '#5d7d6e',
          500: '#3d5a4e',
          600: '#2d4239',
          700: '#1f2e28',
          800: '#141f1b',
          900: '#0a100e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'float-gentle': 'float-gentle 10s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        gradient: 'gradient 8s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
        'sway': 'sway 4s ease-in-out infinite',
        'ripple': 'ripple 3s ease-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'leaf-fall': 'leaf-fall 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '50%': { transform: 'translateY(-5px) rotate(0deg)' },
          '75%': { transform: 'translateY(-15px) rotate(-1deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
        'leaf-fall': {
          '0%': { transform: 'translateY(-100%) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'nature-pattern': 'radial-gradient(circle at 20% 50%, rgba(98, 195, 164, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59, 117, 98, 0.05) 0%, transparent 50%)',
        'soft-grid': 'linear-gradient(rgba(98, 195, 164, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(98, 195, 164, 0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '50px 50px',
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(26, 46, 40, 0.06)',
        soft: '0 4px 16px rgba(26, 46, 40, 0.08)',
        'soft-lg': '0 8px 32px rgba(26, 46, 40, 0.10)',
        'soft-xl': '0 16px 48px rgba(26, 46, 40, 0.12)',
        'green-sm': '0 2px 8px rgba(98, 195, 164, 0.15)',
        green: '0 4px 16px rgba(98, 195, 164, 0.20)',
        'green-lg': '0 8px 32px rgba(98, 195, 164, 0.25)',
        'green-xl': '0 16px 48px rgba(98, 195, 164, 0.30)',
        'inner-soft': 'inset 0 2px 8px rgba(26, 46, 40, 0.04)',
      },
    },
  },
  plugins: [],
}
export default config
