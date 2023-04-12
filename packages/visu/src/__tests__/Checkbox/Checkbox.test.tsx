import { Checkbox } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Checkbox tests', () => {
  it('Should render a Checkbox element', () => {
    render(<Checkbox data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
