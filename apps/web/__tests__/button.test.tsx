import { fireEvent, render, screen } from '@testing-library/react'
import { CheckCircle } from 'phosphor-react'

import { Button } from '@coaktion/visu'

describe('Button tests', () => {
  const buttonText = 'Clique aqui'
  const buttonClick = jest.fn()

  it('Should render a button', () => {
    render(<Button.Root data-testid="element">{buttonText}</Button.Root>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a button with correct text', () => {
    render(<Button.Root data-testid="element">{buttonText}</Button.Root>)
    const element = screen.getByTestId('element')

    expect(element).toHaveTextContent(buttonText)
  })

  it('Should render a button with JSX element', () => {
    render(
      <Button.Root data-testid="element">
        <span>{buttonText}</span>
      </Button.Root>
    )
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('SPAN')
    expect(element.firstElementChild).toHaveTextContent(buttonText)
  })

  it('Should render a button with icon and text', () => {
    render(
      <Button.Root data-testid="element">
        <Button.Icon>
          <CheckCircle />
        </Button.Icon>
        {buttonText}
      </Button.Root>
    )
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.firstElementChild?.tagName).toBe('svg')
  })

  it('Should render a button with size styles', () => {
    render(
      <Button.Root data-testid="element" ghost>
        {buttonText}
      </Button.Root>
    )
    const element = screen.getByTestId('element')
  })

  it('Should render a button with ghost style', () => {
    render(
      <Button.Root data-testid="element" ghost>
        {buttonText}
      </Button.Root>
    )
    const element = screen.getByTestId('element')
  })

  it('Should render a button with disabled style and unable to click', () => {
    render(
      <Button.Root data-testid="element" disabled>
        {buttonText}
      </Button.Root>
    )
    const element = screen.getByTestId('element')

    fireEvent.click(element)
    expect(buttonClick).toHaveBeenCalledTimes(0)
  })

  it('Should render a button with onClick', () => {
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
