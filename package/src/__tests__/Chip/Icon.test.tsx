import Chip from '@/src/library/Chip'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Chip Icon', () => {
  it('should render chip icon component', () => {
    render(<Chip.Icon icon={<div />} data-testid="chip-icon" />)

    const chipIcon = screen.getByTestId('chip-icon')

    expect(chipIcon).toBeDefined()
  })

  it('should render icon', () => {
    render(<Chip.Icon icon={<div />} data-testid="chip-icon" />)

    const chipIcon = screen.getByTestId('chip-icon')

    expect(chipIcon).toContainHTML('<div></div>')
  })
})
