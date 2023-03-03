import { css, styled } from '@library'

export const Icon = styled('div', {
  height: '$6',
  width: '$6',

  'svg, img': {
    height: '100%',
    width: '100%',
  },
})

export const RootStyle = css({
  display: 'flex',
  gap: '$2half',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$md',
  border: 'none',
  cursor: 'pointer',
  transition: 'all $normal',

  '&:disabled': {
    backgroundColor: '$gray',
    color: '$gray500',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      sm: {
        padding: '$2half $6',
        fontSize: '$sm',
        minHeight: '$10',
      },
      md: {
        padding: '$3 $10',
        minHeight: '$12',
      },
      lg: {
        padding: '$9 $12',
        fontSize: 'lg',
        minHeight: '$28',

        [`& ${Icon}`]: {
          height: '$10',
          width: '$10',
        },
      },
    },
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '$gray100',

        '&:hover': {
          backgroundColor: '$primary500',
        },

        '&:active': {
          backgroundColor: '$primary600',
        },
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$gray100',

        '&:hover': {
          backgroundColor: '$secondary500',
        },

        '&:active': {
          backgroundColor: '$secondary600',
        },
      },
      neutral: {
        backgroundColor: '$gray100',
        color: '$gray900',
        boxShadow: '$sm',

        '&:hover': {
          backgroundColor: '$gray200',
        },

        '&:active': {
          backgroundColor: '$gray300',
        },
      },
    },
    ghost: {
      true: {},
    },
    light: {
      true: {
        border: 'none',
        color: '$primary',
        backgroundColor: 'transparent',
        padding: '$3',

        '&:hover': {
          color: '$primary500',
          backgroundColor: 'transparent',
        },

        '&:active': {
          color: '$primary600',
          backgroundColor: 'transparent',
        },

        '&:disabled': {
          color: '$gray',
          backgroundColor: 'transparent',
        },
      },
    },
    full: {
      true: {
        width: '100%',
      },
    },
  },
  compoundVariants: [
    {
      ghost: true,
      variant: 'primary',
      css: {
        border: '1px solid $primary',
        color: '$primary',
        backgroundColor: 'transparent',

        '&:hover': {
          borderColor: '$primary500',
          color: '$primary500',
          backgroundColor: '$primary100',
        },

        '&:active': {
          borderColor: '$primary600',
          color: '$primary600',
          backgroundColor: '$primary100',
        },

        '&:disabled': {
          borderColor: '$gray',
          color: '$gray',
          backgroundColor: 'transparent',
        },
      },
    },
    {
      ghost: true,
      variant: 'secondary',
      css: {
        border: '1px solid $secondary',
        color: '$secondary',
        backgroundColor: 'transparent',

        '&:hover': {
          borderColor: '$secondary500',
          color: '$secondary500',
          backgroundColor: '$secondary100',
        },

        '&:active': {
          borderColor: '$secondary600',
          color: '$secondary600',
          backgroundColor: '$secondary100',
        },

        '&:disabled': {
          borderColor: '$gray',
          color: '$gray',
          backgroundColor: 'transparent',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})
