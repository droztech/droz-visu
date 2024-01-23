import { Tooltip } from '@library'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
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
      <Tooltip.Step content={['Step1', 'Step2']}>
        <div data-testid="element">Hello</div>
      </Tooltip.Step>,
    )
    const element = screen.getByTestId('element')

    expect(element).toBeInTheDocument()
  })

  it('Should render a text with the prop "content" at each step, receiving a text array', async () => {
    render(
      <Tooltip.Step content={['Step1', 'Step2']}>
        <div data-testid="element">Hello</div>
      </Tooltip.Step>,
    )
    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveTextContent('Step1')
    })
  })

  it('Should render a ReactNode content with the prop "content" at each step, receiving a ReactNode array', async () => {
    render(
      <Tooltip.Step
        content={[
          <span key={'step1'} data-testid="content">
            Step1
          </span>,
          'Step2',
        ]}
      >
        <div data-testid="element">Hello</div>
      </Tooltip.Step>,
    )
    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toContainHTML('<span data-testid="content">Step1</span>')
    })
  })

  /**
   * @deprecated - Teste para uma propriedade deprecated
   */
  it('Should render a text with the prop "text" at each step, receiving a text array', async () => {
    render(
      <Tooltip.Step text={['Step1', 'Step2']}>
        <div data-testid="element">Hello</div>
      </Tooltip.Step>,
    )
    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveTextContent('Step1')
    })
  })
})
