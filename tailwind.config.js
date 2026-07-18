/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E2A47',
          deep: '#081B30', // Used for backgrounds
          light: '#163C63',
        },
        grid: '#3E6E9E',
        paper: '#F4F6F2', // Soft white for text
        amber: {
          DEFAULT: '#F0A63B',
          dim: '#C9862A',
        },
        teal: { DEFAULT: '#4FA88A' },
        ink: '#10233B',
        slate: { muted: '#9FB8D1' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'], // Professional headings
        body: ['"IBM Plex Sans"', 'sans-serif'],    // Highly readable body
        mono: ['"IBM Plex Mono"', 'monospace'],    // Tech-spec feel
      },
      backgroundImage: {
        blueprint: 'linear-gradient(rgba(62,110,158,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(62,110,158,0.16) 1px, transparent 1px)',
      },
      backgroundSize: { grid: '32px 32px' },
      boxShadow: {
        // Adds subtle depth for that "glass" look
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      keyframes: {
  sparkleTwinkle: {
    '0%, 100%': { opacity: '0.2', transform: 'scale(0.7) rotate(0deg)' },
    '50%': { opacity: '1', transform: 'scale(1.3) rotate(180deg)' }, // Larger scale & rotation
  },
},
animation: {
  sparkle: 'sparkleTwinkle 1.8s ease-in-out infinite', // Faster, more energetic
},
      // animation: {
      //   'sparkle': 'sparkleTwinkle 2.4s ease-in-out infinite',
      //   'panel-in': 'panelIn 180ms ease-out forwards',
      //   'panel-out': 'panelOut 150ms ease-in forwards',
      // },
    },
  },
  plugins: [],
}