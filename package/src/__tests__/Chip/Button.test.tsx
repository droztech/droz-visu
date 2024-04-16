import Chip from '@/src/library/Chip'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Chip Button', () => {
  it('should render chip Button component', () => {
    render(
      <Chip.Button data-testid="chip-button">
        <div />
      </Chip.Button>,
    )

    const chipButton = screen.getByTestId('chip-button')

    expect(chipButton).toBeDefined()
  })

  it('should render Button', () => {
    render(
      <Chip.Button data-testid="chip-button">
        <div />
      </Chip.Button>,
    )

    const chipButton = screen.getByTestId('chip-button')

    expect(chipButton).toContainHTML('<div></div>')
  })
})
