import { Menu } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('MenuRoot tests', () => {
  it('Should render a MenuRoot element', () => {
    render(<Menu.Root expanded data-testid="element"></Menu.Root>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
