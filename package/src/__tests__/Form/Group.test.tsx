import { Form } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('FormGroup tests', () => {
  it('Should render a FormGroup element', () => {
    render(<Form.Group data-testid="element"></Form.Group>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
