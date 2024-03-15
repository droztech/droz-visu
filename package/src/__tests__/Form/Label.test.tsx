import { Form } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('FormLabel tests', () => {
  it('Should render a FormLabel element', () => {
    render(<Form.Label data-testid="element"></Form.Label>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
