import { Tooltip } from '@library'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
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

  it('Should render content when trigger gets a click', async () => {
    render(
      <Tooltip.Hover content={<span data-testid="content">Text1</span>}>
        <div data-testid="element">Hello</div>
      </Tooltip.Hover>,
    )
    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toContainHTML(
        '<span data-testid="content">Text1</span>',
      )
    })
  })

  it('Should execute "onOpenChange" when "open" value changes', async () => {
    const onOpenChange = jest.fn()
    console.log(onOpenChange)
    render(
      <Tooltip.Hover
        content={<span data-testid="content">Text1</span>}
        onOpenChange={onOpenChange}
      >
        <div data-testid="element">Hello</div>
      </Tooltip.Hover>,
    )
    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toContainHTML(
        '<span data-testid="content">Text1</span>',
      )
      expect(onOpenChange).toBeCalledTimes(1)
      expect(onOpenChange).toBeCalledWith(true)
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

  it('Should close the tooltip after the specified closeTime', async () => {
    const closeTime = 2500

    render(
      <Tooltip.Hover content="Text" closeTime={closeTime}>
        <div data-testid="element">Hello</div>
      </Tooltip.Hover>,
    )

    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toContainHTML('Text')
      setTimeout(() => {
        expect(screen.queryByRole('tooltip')).toBeNull()
      }, closeTime + 100)
    })
  })
})
