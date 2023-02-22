import { styled } from '../../stitches.config'

export const Main = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '$background',
  color: '$gray50',
  height: '100vh',
  width: '100vw',
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  padding: '$2',
})

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
  maxWidth: '768px',
  width: '95vw',
  height: '100%',
})
