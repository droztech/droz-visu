import { Checkbox } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('CheckboxRoot tests', () => {
  it('Should render a CheckboxRoot element', () => {
    render(
      <Checkbox.Root data-testid="element">
        <span></span>
      </Checkbox.Root>
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a CheckboxRoot element with children', () => {
    render(
      <Checkbox.Root data-testid="element">
        <span></span>
      </Checkbox.Root>
    )
    const element = screen.queryByTestId('element')

    expect(element?.tagName).toBe('DIV')
    expect(element?.children[0].tagName).toBe('SPAN')
  })

  it('Should render a CheckboxRoot element asChild', () => {
    render(
      <Checkbox.Root data-testid="element" asChild>
        <label></label>
      </Checkbox.Root>
    )
    const element = screen.queryByTestId('element')

    expect(element?.tagName).toBe('LABEL')
    expect(element?.children.length).toBe(0)
  })
})
