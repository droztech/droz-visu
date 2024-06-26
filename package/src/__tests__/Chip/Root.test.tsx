import Chip from '@/src/library/Chip'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Chip Root', () => {
  it('should render chip component', () => {
    render(<Chip.Root data-testid="chip">chip</Chip.Root>)

    const chip = screen.getByTestId('chip')

    expect(chip).toBeDefined()
  })

  it('should have a label', () => {
    render(<Chip.Root data-testid="chip">chip</Chip.Root>)

    const chip = screen.getByTestId('chip')

    expect(chip).toHaveTextContent('chip')
  })
})
