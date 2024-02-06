import { Divider } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Divider tests', () => {
  it('Should render a Divider element without element', () => {
    render(<Divider data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element?.children.length).toBe(2)
    expect(element?.children[0].tagName).toBe('HR')
    expect(element?.children[1].tagName).toBe('HR')
  })

  it('Should render a Divider element with middle element', () => {
    render(<Divider data-testid="element">OU</Divider>)
    const element = screen.queryByTestId('element')

    expect(element?.children.length).toBe(3)
    expect(element?.children[0].tagName).toBe('HR')
    expect(element?.children[1].tagName).toBe('SPAN')
    expect(element?.children[2].tagName).toBe('HR')
  })
})
