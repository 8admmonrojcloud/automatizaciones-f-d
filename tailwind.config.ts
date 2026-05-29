import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bunker: {
          black: '#030712',
          navy: '#071225',
          cyan: '#00F5FF',
          green: '#00FF88',
          purple: '#9B5CFF',
          glass: 'rgba(255,255,255,0.08)',
        },
      },
      boxShadow: {
        glow: '0 0 35px rgba(0,255,136,.35)',
        cyanGlow: '0 0 42px rgba(0,245,255,.28)',
        purpleGlow: '0 0 55px rgba(155,92,255,.25)',
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at 20% 20%, rgba(0,255,136,.18), transparent 30%), radial-gradient(circle at 80% 30%, rgba(155,92,255,.18), transparent 32%), radial-gradient(circle at 50% 80%, rgba(0,245,255,.13), transparent 28%)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
