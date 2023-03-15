/* eslint-disable */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/library/**/*.{ts,tsx}', './src/App.tsx', './src/main.tsx'],
  theme: {
    extend: {},

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

    colors: {
      backgroundColor: '#FFFFFF',

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
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('children', '& > *')
    },
  ],
}
