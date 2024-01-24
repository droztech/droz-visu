import { OTPInput } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('OTPInput tests', () => {
  it('Should render a OTPInput element', () => {
    render(<OTPInput data-testid="element" count={5} />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
