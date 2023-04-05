import { Avatar } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Avatar tests', () => {
  it('Should render a Avatar element', () => {
    render(<Avatar fallback="" url="" data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a span Avatar element without image', () => {
    render(<Avatar fallback="CO" url="" data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element?.tagName).toBe('SPAN')
  })
})
