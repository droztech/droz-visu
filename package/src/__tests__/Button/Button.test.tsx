import { Button } from '@library'

import { fireEvent, render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Button Root tests', () => {
  const buttonText = 'Clique aqui'
  const buttonClick = jest.fn()

  it('Should render a button element', () => {
    render(<Button data-testid="element">{buttonText}</Button>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a button element with a child text', () => {
    render(<Button data-testid="element">{buttonText}</Button>)
    const element = screen.getByTestId('element')

    expect(element).toHaveTextContent(buttonText)
  })

  it('Should render a button element with a child JSX element', () => {
    render(
      <Button data-testid="element">
        <span>{buttonText}</span>
      </Button>,
    )
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('SPAN')
    expect(element.firstElementChild).toHaveTextContent(buttonText)
  })

  it('Should render a button element with disabled style and unable to click', () => {
    render(
      <Button data-testid="element" disabled>
        {buttonText}
      </Button>,
    )
    const element = screen.getByTestId('element')

    fireEvent.click(element)
    expect(buttonClick).toHaveBeenCalledTimes(0)
  })

  it('Should render a button element with onClick', () => {
    render(
      <Button data-testid="element" onClick={buttonClick}>
        {buttonText}
      </Button>,
    )
    const element = screen.getByTestId('element')

    fireEvent.click(element)
    expect(buttonClick).toHaveBeenCalledTimes(1)
  })

  it('Should render a button element with loading', () => {
    render(
      <Button data-testid="element" loading>
        {buttonText}
      </Button>,
    )
    const element = screen.getByTestId('element')

    expect(element.tagName).toBe('BUTTON')
    expect(element.children[0].tagName).toBe('SPAN')
  })

  it('Should render a different element using the "asChild" property', () => {
    render(
      <Button data-testid="element" asChild>
        <h1>Hello World</h1>
      </Button>,
    )
    const element = screen.getByTestId('element')

    expect(element.tagName).toBe('H1')
  })

  it('Should render loading over the children element using the "asChild" and loading property simultaneously', () => {
    render(
      <Button data-testid="element" asChild loading>
        <h1>Hello World</h1>
      </Button>,
    )
    const element = screen.getByTestId('element')

    expect(element.tagName).toBe('BUTTON')
    expect(element.children[0].tagName).toBe('SPAN')
  })
})
