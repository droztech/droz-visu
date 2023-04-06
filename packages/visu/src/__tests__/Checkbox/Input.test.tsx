import { Checkbox } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('CheckboxInput tests', () => {
  it('Should render a CheckboxInput element', () => {
    render(<Checkbox.Input data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
