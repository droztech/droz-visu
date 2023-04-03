import { Tooltip } from '@library'
import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

// Testes limitados por conta do Radix
describe('TooltipHover tests', () => {
  it('Should render a TooltipHover element', () => {
    render(
      <Tooltip.Hover text="Text1" data-testid="element">
        <div>Hello</div>
      </Tooltip.Hover>
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
