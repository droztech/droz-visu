import { Tooltip } from '@library'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('TooltipTime tests', () => {
  it('Should render a TooltipTime element', () => {
    render(
      <Tooltip.Time duration={5000} content="Time">
        <div data-testid="element">Hello</div>
      </Tooltip.Time>,
    )
    const element = screen.getByTestId('element')

    expect(element).toBeInTheDocument()
  })

  it('Should render a text with the prop "content"', async () => {
    render(
      <Tooltip.Time duration={5000} content="Text1">
        <div data-testid="element">Hello</div>
      </Tooltip.Time>,
    )
    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveTextContent('Text1')
    })
  })

  it('Should render a ReactNode content with the prop "content"', async () => {
    render(
      <Tooltip.Time duration={5000} content={<span data-testid="content">Text1</span>}>
        <div data-testid="element">Hello</div>
      </Tooltip.Time>,
    )
    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toContainHTML('<span data-testid="content">Text1</span>')
    })
  })

  it('Should keep the TooltipTime open for the specified duration', async () => {
    jest.useFakeTimers()

    render(
      <Tooltip.Time duration={5000} content="Time">
        <div data-testid="element">Hello</div>
      </Tooltip.Time>,
    )

    const element = screen.getByTestId('element')
    fireEvent.click(element)

    jest.advanceTimersByTime(5000)

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).toBeNull()
    })
  })
})
