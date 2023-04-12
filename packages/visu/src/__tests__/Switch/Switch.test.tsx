import { Switch } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Switch tests', () => {
  it('Should render a Switch element', () => {
    render(<Switch data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
