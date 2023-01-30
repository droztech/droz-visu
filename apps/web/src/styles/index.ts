import { styled } from '@stitches/react'

export const Main = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '$background',
  color: '$gray50',
})

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '768px',
  width: '95vw',
})
