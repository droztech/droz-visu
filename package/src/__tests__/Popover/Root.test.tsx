import { Popover } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('PopoverRoot tests', () => {
  it('Should render a PopoverRoot element', () => {
    render(<Popover.Root data-testid="element"></Popover.Root>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
