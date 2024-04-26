import {
  animation,
  boxShadow,
  minHeight,
  keyframes,
} from 'tailwindcss/defaultTheme'
import { ThemeConfig } from 'tailwindcss/types/config'

export const theme = {
  keyframes: {
    ...keyframes,
    flash: {
      from: { opacity: '1' },
      to: { opacity: '0.2' },
    },
    hide: {
      from: { opacity: '1' },
      to: { opacity: '0' },
    },
    swipeIn: {
      from: {
        transform: 'translateX(calc(100% + 0.5rem))',
      },
      to: { transform: 'translateX(0)' },
    },
    swipeOut: {
      from: {
        transform: 'translateX(0)',
      },
      to: { transform: 'translateX(calc(100% + 0.5rem))' },
    },
    slideDown: {
      from: { height: '0', opacity: '0' },
      to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
    },
    slideUp: {
      from: {
        height: 'var(--radix-accordion-content-height)',
        opacity: '1',
      },
      to: { height: '0', opacity: '0' },
    },
    wave: {
      from: { backgroundPosition: '300% 0' },
      to: { backgroundPosition: '-300% 0' },
    },
  },

  animation: {
    ...animation,
    flash: 'flash 1000ms infinite alternate',
    hide: 'hide 100ms ease-in',
    swipeIn: 'swipeIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    swipeOut: 'swipeOut 100ms ease-out',
    slideDown: 'slideDown 200ms ease-in',
    slideUp: 'slideUp 200ms ease-out',
    wave: 'wave 10000ms infinite linear',
  },

  boxShadow: {
    ...boxShadow,
    sm: '0px 2px 16px 0px #00000029',
    md: '0px 4px 24px 0px #0000003D',
    lg: '0px 6px 24px 0px #261D2F52',
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
      100: '#EDF7F5',
      200: '#ADE6D8',
      300: '#70D3BA',
      400: '#32C09D',
      500: '#248870',
      600: '#1B6553',
      700: '#144A3D',
    },

    error: {
      DEFAULT: '#F20045',
      100: '#FDEDF2',
      200: '#FBB3C7',
      300: '#F76F96',
      400: '#F20045',
      500: '#CC003A',
      600: '#99002B',
      700: '#66001D',
    },

    alert: {
      DEFAULT: '#FFA624',
      100: '#FFF4E5',
      200: '#FFDBA7',
      300: '#FFC570',
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

  minHeight: {
    ...minHeight,
    10: '2.5rem',
    12: '3rem',
    28: '7rem',
  },
} satisfies Partial<ThemeConfig>
