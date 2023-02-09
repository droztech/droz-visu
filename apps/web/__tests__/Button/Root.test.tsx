import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from '@coaktion/visu'

describe('Button Root tests', () => {
  const buttonText = 'Clique aqui'
  const buttonClick = jest.fn()

  it('Should render a button element', () => {
    render(<Button.Root data-testid="element">{buttonText}</Button.Root>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a button element with a child text', () => {
    render(<Button.Root data-testid="element">{buttonText}</Button.Root>)
    const element = screen.getByTestId('element')

    expect(element).toHaveTextContent(buttonText)
  })

  it('Should render a button element with a child JSX element', () => {
    render(
      <Button.Root data-testid="element">
        <span>{buttonText}</span>
      </Button.Root>
    )
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('SPAN')
    expect(element.firstElementChild).toHaveTextContent(buttonText)
  })

  it('Should render a button element with disabled style and unable to click', () => {
    render(
      <Button.Root data-testid="element" disabled>
        {buttonText}
      </Button.Root>
    )
    const element = screen.getByTestId('element')

    fireEvent.click(element)
    expect(buttonClick).toHaveBeenCalledTimes(0)
  })

  it('Should render a button element with onClick', () => {
    render(
      <Button.Root data-testid="element" onClick={buttonClick}>
        {buttonText}
      </Button.Root>
    )
    const element = screen.getByTestId('element')

    fireEvent.click(element)
    expect(buttonClick).toHaveBeenCalledTimes(1)
  })
})
