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
    weight: {
      light: {
        fontWeight: '300',
      },
      normal: {
        fontWeight: 'normal',
      },
      semibold: {
        fontWeight: '600',
      },
      bold: {
        fontWeight: 'bold',
      },
    },
    link: {
      primary: {
        cursor: 'pointer',
        borderRadius: '$md',
        '&:hover': { color: '$primary500' },
        '&:active': { color: '$primary600' },
      },
      secondary: {
        cursor: 'pointer',
        borderRadius: '$md',
        '&:hover': { color: '$secondary500' },
        '&:active': { color: '$secondary600' },
      },
      success: {
        cursor: 'pointer',
        borderRadius: '$md',
        '&:hover': { color: '$success500' },
        '&:active': { color: '$success600' },
      },
      error: {
        cursor: 'pointer',
        borderRadius: '$md',
        '&:hover': { color: '$error500' },
        '&:active': { color: '$error600' },
      },
      alert: {
        cursor: 'pointer',
        borderRadius: '$md',
        '&:hover': { color: '$alert500' },
        '&:active': { color: '$alert600' },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
  },
})
