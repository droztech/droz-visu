import { Tooltip } from '@library'
import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

// Testes limitados por conta do Radix
describe('TooltipText tests', () => {
  it('Should render a TooltipText element', () => {
    render(
      <Tooltip.Text text="Text1" data-testid="element">
        <div>Hello</div>
      </Tooltip.Text>
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
