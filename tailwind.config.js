/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        surface: 'var(--color-surface)',
        line: 'var(--color-line)',
        volt: 'var(--color-volt)',
        paper: 'var(--color-paper)',
        sage: 'var(--color-sage)',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-rise': 'fadeRise 0.8s ease-out both',
        'fade-rise-delay': 'fadeRise 0.8s ease-out 0.2s both',
        'fade-rise-delay-2': 'fadeRise 0.8s ease-out 0.4s both',
        'pulse-line': 'pulseLine 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeRise: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.35', transform: 'scaleX(0.85)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
