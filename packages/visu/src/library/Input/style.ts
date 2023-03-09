import { styled } from '@library'

export const Input = styled('input', {
  backgroundColor: 'transparent',
  color: '$gray900',
  outline: 'none !important',

  height: '$10',
  width: '100%',

  border: 'none',

  '&:placeholder': {
    color: '$gray400',
  },

  '&:disabled': {
    color: '$gray400',
    pointerEvents: 'none',
    '&::placeholder': {
      color: '$gray400',
    },
  },
})

export const Icon = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  color: '$gray500',
  outline: 'none !important',
  cursor: 'text',

  padding: '0',
  height: '$6',
  width: '$6',

  border: 'none',

  transition: 'all $normal',

  'svg, img': {
    height: '100%',
    width: '100%',
  },

  '&:disabled': {
    color: '$gray400',
    pointerEvents: 'none',
  },

  variants: {
    clickable: {
      true: {
        '&:hover': {
          color: '$primary',
          cursor: 'pointer',
        },
      },
    },
  },
})

export const Root = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  width: 'fit-content',
  padding: '0 $4',
  color: '$gray500',
  borderRadius: '$md',
  cursor: 'text',

  '&:focus-within': {
    border: '1px solid $primary',
  },

  [`&:focus-within:has(> ${Input}:placeholder-shown)`]: {
    outline: '0.2rem solid $gray900',
    outlineOffset: '0.2rem',
  },

  [`&:focus-within:has(> ${Input}:invalid)`]: {
    border: '1px solid $error',
  },

  variants: {
    status: {
      error: {
        border: '1px solid $error',
      },
      success: {
        border: '1px solid $success',
      },
      default: {
        border: '1px solid $gray500',
      },
    },
    disabled: {
      true: {
        background: '$gray200',
        cursor: 'not-allowed',
        border: '1px solid $gray400',
      },
    },
    full: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    status: 'default',
  },
})
