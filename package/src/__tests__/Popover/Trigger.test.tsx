import { Popover } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('PopoverTrigger tests', () => {
  it('Should render a PopoverTrigger element', () => {
    render(
      <Popover.Root>
        <Popover.Trigger data-testid="element"></Popover.Trigger>
      </Popover.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
