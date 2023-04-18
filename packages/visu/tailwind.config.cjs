/* eslint-disable */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/library/**/*.{ts,tsx}', './src/App.tsx', './src/main.tsx'],
  theme: {
    extend: {
      boxShadow: {
        sm: '0px 2px 16px 0px #00000029',
        md: '0px 4px 24px 0px #0000003D',
        lg: '0px 6px 24px 0px #261D2F52',
      },
      minHeight: {
        10: '2.5rem',
        12: '3rem',
        28: '7rem',
      },
      keyframes: {
        flash: {
          from: { opacity: '1' },
          to: { opacity: '0.2' },
        },
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: 'translateX(calc(100% + 0.5rem))',
          },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + 0.5rem))' },
        },
      },
      animation: {
        flash: 'flash 1000ms infinite alternate',
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
    },

    colors: {
      background: '#FFFFFF',
      transparent: 'transparent',
      inherit: 'inherit',
      current: 'currentColor',

      primary: {
        DEFAULT: '#7900F2',
        100: '#F9F8FC',
        200: '#E4DBFF',
        300: '#AC85FF',
        400: '#7900F2',
        500: '#5300A7',
        600: '#3E007C',
        700: '#241534',
      },

      secondary: {
        DEFAULT: '#FD6D01',
        100: '#FFF8F2',
        200: '#FFDDC3',
        300: '#FDA562',
        400: '#FD6D01',
        500: '#E36100',
        600: '#C35400',
        700: '#A14600',
      },

      gray: {
        DEFAULT: '#C8C8C8',
        100: '#FFFFFF',
        200: '#F8F8F8',
        300: '#ECECEC',
        400: '#C8C8C8',
        500: '#888888',
        600: '#616161',
        700: '#474747',
        800: '#303030',
        900: '#000000',
      },

      success: {
        DEFAULT: '#32C09D',
        300: '#EDF7F5',
        400: '#32C09D',
        500: '#248870',
        600: '#1B6553',
        700: '#144A3D',
      },

      error: {
        DEFAULT: '#F20045',
        300: '#FDEDF2',
        400: '#F20045',
        500: '#CC003A',
        600: '#99002B',
        700: '#66001D',
      },

      alert: {
        DEFAULT: '#FFA624',
        300: '#FFF4E5',
        400: '#FFA624',
        500: '#E08401',
        600: '#B56A00',
        700: '#663C00',
      },
    },

    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      md: ['1rem', '1.5rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.5rem', '2rem'],
      xl: ['2rem', '2.5rem'],
      '2xl': ['3rem', '3.5rem'],
      '3xl': ['4rem', '4.5rem'],
      'inherit-size': 'inherit',
    },
  },
  plugins: [
    plugin(function ({ addVariant, matchVariant }) {
      addVariant('children', '& > *')
      matchVariant('has', (value) => {
        return `&:has(> ${value})`
      })
    }),
  ],
}
