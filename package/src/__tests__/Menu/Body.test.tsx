import { Menu } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('MenuBody tests', () => {
  it('Should render a MenuBody element', () => {
    render(<Menu.Body data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
