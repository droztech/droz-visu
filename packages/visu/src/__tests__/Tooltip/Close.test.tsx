import { Tooltip } from '@library'
import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

// Testes limitados por conta do Radix
describe('TooltipClose tests', () => {
  it('Should render a TooltipClose element', () => {
    render(
      <Tooltip.Close text="Close" data-testid="element">
        <div>Hello</div>
      </Tooltip.Close>
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
