import { Loading } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Loading tests', () => {
  it('Should render a Loading element', () => {
    render(<Loading data-testid="element" />)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a Loading element with 3 dots', () => {
    render(<Loading data-testid="element" />)
    const element = screen.getByTestId('element')

    expect(element.children.length).toBe(3)
  })
})
