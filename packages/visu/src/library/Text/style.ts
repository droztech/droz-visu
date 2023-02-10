import { css } from '@/stitches.config'

export const Root = css({
  transition: '$normal all',

  variants: {
    underline: {
      true: {
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
      },
    },
    size: {
      xs: {
        fontSize: '$xs',
      },
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
      },
    },
    link: {
      primary: {
        cursor: 'pointer',
        '&:hover': { color: '$primary500' },
        '&:active': { color: '$primary600' },
      },
      secondary: {
        cursor: 'pointer',
        '&:hover': { color: '$secondary500' },
        '&:active': { color: '$secondary600' },
      },
      success: {
        cursor: 'pointer',
        '&:hover': { color: '$success500' },
        '&:active': { color: '$success600' },
      },
      error: {
        cursor: 'pointer',
        '&:hover': { color: '$error500' },
        '&:active': { color: '$error600' },
      },
      alert: {
        cursor: 'pointer',
        '&:hover': { color: '$alert500' },
        '&:active': { color: '$alert600' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
