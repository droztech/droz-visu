import { Tooltip } from '@library'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'

// Testes limitados por conta do Radix
describe('TooltipClose tests', () => {
  it('Should render a TooltipClose element', () => {
    render(
      <Tooltip.Close content="Close">
        <div data-testid="element">Hello</div>
      </Tooltip.Close>,
    )
    const element = screen.getByTestId('element')

    expect(element).toBeInTheDocument()
  })

  it('Should render a text with the prop "content"', async () => {
    render(
      <Tooltip.Close content="Text1">
        <div data-testid="element">Hello</div>
      </Tooltip.Close>,
    )
    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toHaveTextContent('Text1')
    })
  })

  it('Should render a ReactNode content with the prop "content"', async () => {
    render(
      <Tooltip.Close content={<span data-testid="content">Text1</span>}>
        <div data-testid="element">Hello</div>
      </Tooltip.Close>,
    )
    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toContainHTML(
        '<span data-testid="content">Text1</span>',
      )
    })
  })

  it('Should close the tooltip after the specified closeTime', async () => {
    const closeTime = 2500

    render(
      <Tooltip.Close content="Text" closeTime={closeTime}>
        <div data-testid="element">Hello</div>
      </Tooltip.Close>,
    )

    const element = screen.getByTestId('element')
    fireEvent.click(element)

    await waitFor(() => {
      expect(screen.getByRole('dialog')).toContainHTML('Text')
      setTimeout(() => {
        expect(screen.queryByRole('dialog')).toBeNull()
      }, closeTime + 100)
    })
  })
})
