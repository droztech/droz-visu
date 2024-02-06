import { Menu } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('MenuGroup tests', () => {
  it('Should render a MenuGroup element', () => {
    render(<Menu.Group data-testid="element"></Menu.Group>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
