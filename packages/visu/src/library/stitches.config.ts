import { CSS as StitchesCSS, createStitches } from '@stitches/react'

import {
  alertColors,
  backgroundColor,
  errorColors,
  grayColors,
  primaryColors,
  secondaryColors,
  successColors,
} from './styles/config/colors'
import { metrics } from './styles/config/metrics'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  prefix: 'visu',
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
})

export const componentsStyle = globalCss({
  '*': {
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  '*:focus:not(:active)': {
    outline: '0.2rem solid $gray900',
    outlineOffset: '0.2rem',
  },
})

export type CSS = StitchesCSS<typeof config>
