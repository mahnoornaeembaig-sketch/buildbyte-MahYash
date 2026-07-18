/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E2A47',
          deep: '#081B30',
          light: '#163C63',
        },
        grid: '#3E6E9E',
        paper: '#F4F6F2',
        amber: {
          DEFAULT: '#F0A63B',
          dim: '#C9862A',
        },
        teal: {
          DEFAULT: '#4FA88A',
        },
        ink: '#10233B',
        slate: {
          muted: '#9FB8D1',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(62,110,158,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(62,110,158,0.16) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      keyframes: {
  // panelIn, panelOut, messageIn stay as before
  sparkleTwinkle: {
    '0%, 100%': { opacity: '0.2', transform: 'scale(0.7) rotate(0deg)' },
    '50%': { opacity: '1', transform: 'scale(1.1) rotate(15deg)' },
  },
},
animation: {
  // panel-in, panel-out, message-in stay as before
  sparkle: 'sparkleTwinkle 2.4s ease-in-out infinite',
},
      // },
      // animation: {
      //   'panel-in': 'panelIn 180ms ease-out forwards',
      //   'panel-out': 'panelOut 150ms ease-in forwards',
      //   'message-in': 'messageIn 200ms ease-out forwards',
      // },
    },
  },
  plugins: [],
}