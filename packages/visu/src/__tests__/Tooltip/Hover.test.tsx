import { Tooltip } from '@library'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Testes limitados por conta do Radix
describe('TooltipHover tests', () => {
  it('Should render a TooltipHover element', () => {
    render(
      <Tooltip.Hover content="Text1">
        <div data-testid="element">Hello</div>
      </Tooltip.Hover>,
    )
    const element = screen.getByTestId('element')

    expect(element).toBeInTheDocument()
  })

  it('Should render a text with the prop "content"', async () => {
    const user = userEvent.setup()

    render(
      <Tooltip.Hover content="Text1">
        <div data-testid="element">Hello</div>
      </Tooltip.Hover>,
    )
    const element = screen.getByTestId('element')
    await user.hover(element)

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toHaveTextContent('Text1')
    })
  })

  it('Should render a ReactNode content with the prop "content"', async () => {
    const user = userEvent.setup()

    render(
      <Tooltip.Hover content={<span data-testid="content">Text1</span>}>
        <div data-testid="element">Hello</div>
      </Tooltip.Hover>,
    )
    const element = screen.getByTestId('element')
    await user.hover(element)

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toContainHTML(
        '<span data-testid="content">Text1</span>',
      )
    })
  })

  /**
   * @deprecated - Teste para uma propriedade deprecated
   */
  it('Should render a text with the prop "text"', async () => {
    const user = userEvent.setup()

    render(
      <Tooltip.Hover text="Text1">
        <div data-testid="element">Hello</div>
      </Tooltip.Hover>,
    )
    const element = screen.getByTestId('element')
    await user.hover(element)

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toHaveTextContent('Text1')
    })
  })
})
