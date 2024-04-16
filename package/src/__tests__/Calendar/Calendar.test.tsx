import { Calendar } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Calendar Root tests', () => {
  it('Should render a calendar element', () => {
    render(<Calendar data-testid="element" />)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })
})
