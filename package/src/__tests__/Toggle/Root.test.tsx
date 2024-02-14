import { Toggle } from '@library'

import { fireEvent, render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('ToggleRoot tests', () => {
  it('Should render a ToggleRoot element', () => {
    render(<Toggle.Root type="single" data-testid="element"></Toggle.Root>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should Toggle single element', () => {
    render(
      <Toggle.Root type="single" data-testid="element">
        <Toggle.Item value="op1">op1</Toggle.Item>
        <Toggle.Item value="op2">op2</Toggle.Item>
      </Toggle.Root>,
    )
    const element = screen.queryByTestId('element')

    if (element?.children[0]) fireEvent.click(element.children[0])
    expect(element?.children[0]).toHaveAttribute('data-state', 'on')
    expect(element?.children[1]).toHaveAttribute('data-state', 'off')

    if (element?.children[1]) fireEvent.click(element.children[1])
    expect(element?.children[0]).toHaveAttribute('data-state', 'off')
    expect(element?.children[1]).toHaveAttribute('data-state', 'on')
  })

  it('Should Toggle multiple element', () => {
    render(
      <Toggle.Root type="multiple" data-testid="element">
        <Toggle.Item value="op1">op1</Toggle.Item>
        <Toggle.Item value="op2">op2</Toggle.Item>
      </Toggle.Root>,
    )
    const element = screen.queryByTestId('element')

    if (element?.children[0]) fireEvent.click(element.children[0])
    expect(element?.children[0]).toHaveAttribute('data-state', 'on')
    expect(element?.children[1]).toHaveAttribute('data-state', 'off')

    if (element?.children[1]) fireEvent.click(element.children[1])
    expect(element?.children[0]).toHaveAttribute('data-state', 'on')
    expect(element?.children[1]).toHaveAttribute('data-state', 'on')
  })
})
