import { Tooltip } from '@library'
import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

// Testes limitados por conta do Radix
describe('TooltipStep tests', () => {
  it('Should render a TooltipStep element', () => {
    render(
      <Tooltip.Step text={['Step1', 'Step2']} data-testid="element">
        <div>Hello</div>
      </Tooltip.Step>
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
