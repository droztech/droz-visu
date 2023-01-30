import { fireEvent, render, screen } from '@testing-library/react'
import { Info } from 'phosphor-react'

import { Text } from '@coaktion/visu'

describe('Text tests', () => {
  const textText = 'Hello World'
  const textClick = jest.fn()

  it('Should render a text', () => {
    render(<Text data-testid="element">{textText}</Text>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a correct text', () => {
    render(<Text data-testid="element">{textText}</Text>)
    const element = screen.getByTestId('element')

    expect(element).toHaveTextContent(textText)
  })

  it('Should render a different tag text', () => {
    render(
      <Text data-testid="element" as="h1">
        {textText}
      </Text>
    )
    const element = screen.getByTestId('element')

    expect(element.tagName).toBe('H1')
  })

  it('Should render a text with onClick', () => {
    render(
      <Text data-testid="element" link="primary" onClick={textClick}>
        {textText}
      </Text>
    )
    const element = screen.getByTestId('element')

    fireEvent.click(element)
    expect(textClick).toHaveBeenCalledTimes(1)
  })

  it('Should render a text with image', () => {
    render(
      <Text data-testid="element" color="alert400">
        <Info />
        {textText}
      </Text>
    )
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('svg')
  })
})
