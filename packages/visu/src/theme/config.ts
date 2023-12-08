import { colors } from './colors'
import { animation, boxShadow, minHeight, keyframes } from 'tailwindcss/defaultTheme'
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
        transform: 'translateX(var(--radix-toast-swipe-end-x))',
      },
      to: { transform: 'translateX(calc(100% + 0.5rem))' },
    },
    slideDown: {
      from: { height: '0' },
      to: { height: 'var(--radix-accordion-content-height)' },
    },
    slideUp: {
      from: { height: 'var(--radix-accordion-content-height)' },
      to: { height: '0' },
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
  },

  boxShadow: {
    ...boxShadow,
    sm: '0px 2px 16px 0px #00000029',
    md: '0px 4px 24px 0px #0000003D',
    lg: '0px 6px 24px 0px #261D2F52',
  },

  colors,

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
