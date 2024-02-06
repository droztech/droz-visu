import { Radio } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('RadioRoot tests', () => {
  it('Should render a RadioRoot element', () => {
    render(<Radio.Root data-testid="element"></Radio.Root>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
