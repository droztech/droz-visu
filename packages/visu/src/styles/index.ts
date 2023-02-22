import { styled } from '@/stitches.config'

export const Main = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#18181b',
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$gray50',
  gap: '1rem',
  maxWidth: '95vw',
  minWidth: '60vw',
  minHeight: '40vh',
  borderRadius: '$md',
  border: '3px solid $gray500',
  backgroundColor: '$background',

  variants: {
    col: {
      true: {
        flexDirection: 'column',
      },
    },
  },
})
