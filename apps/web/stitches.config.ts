import { createStitches } from '@stitches/react'

import {
  alertColors,
  backgroundColor,
  errorColors,
  grayColors,
  primaryColors,
  secondaryColors,
  successColors,
} from './src/styles/config/colors'
import { metrics } from './src/styles/config/metrics'

export const { createTheme, styled, css, globalCss } = createStitches({
  theme: {
    colors: {
      background: backgroundColor,
      gray: grayColors.gray400,
      primary: primaryColors.primary400,
      secondary: secondaryColors.secondary400,
      success: successColors.success400,
      error: errorColors.error400,
      alert: alertColors.alert400,

      ...grayColors,
      ...primaryColors,
      ...secondaryColors,
      ...successColors,
      ...errorColors,
      ...alertColors,
    },
    space: metrics,
    sizes: metrics,
    radii: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '3rem',
      full: '50%',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    transitions: {
      fast: '100ms',
      normal: '150ms',
      slow: '300ms',
    },
    shadows: {
      sm: '0px 0.125rem 1rem 0px #000000',
      md: '0px 0.25rem 1.5rem 0px #000000',
      lg: '0px 0.375rem 2rem 0px #000000',
    },
  },
  utils: {
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),
  },
  media: {
    sm: '(max-width: 425px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1440px)',
  },
})

export const darkTheme = createTheme({
  colors: {
    background: '#303030',
    gray900: '#FFFFFF',
    primary: '#AC85FF',
    secondary: '#FDA562',
  },
})
