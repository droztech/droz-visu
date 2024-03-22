import { Popover } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('PopoverContent tests', () => {
  it('Should render a PopoverContent element', () => {
    render(
      <Popover.Root>
        <Popover.Content data-testid="element"></Popover.Content>
      </Popover.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
