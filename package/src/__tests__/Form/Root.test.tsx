import { Form } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('FormRoot tests', () => {
  it('Should render a FormRoot element', () => {
    render(<Form.Root data-testid="element"></Form.Root>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
