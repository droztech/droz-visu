import { Form } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('FormMessage tests', () => {
  it('Should render a FormMessage element', () => {
    render(<Form.Message data-testid="element">Test</Form.Message>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should not render a FormMessage element', () => {
    render(<Form.Message data-testid="element">Test</Form.Message>)
    const element = screen.queryByTestId('element')

    expect(element?.children).toBeDefined()
  })

  it('Should not render a FormMessage element', () => {
    render(<Form.Message data-testid="element"></Form.Message>)
    const element = screen.queryByTestId('element')

    expect(element?.children).not.toBeDefined()
  })

  it('Should not render a FormMessage element', () => {
    render(
      <Form.Message isHidden data-testid="element">
        Test
      </Form.Message>,
    )
    const element = screen.queryByTestId('element')

    expect(element?.children).not.toBeDefined()
  })
})
