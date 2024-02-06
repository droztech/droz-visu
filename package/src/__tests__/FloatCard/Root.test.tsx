import { FloatCard } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('FloatCardRoot tests', () => {
  it('Should render a FloatCardRoot element', () => {
    render(<FloatCard.Root data-testid="element"></FloatCard.Root>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
