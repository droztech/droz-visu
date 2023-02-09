import { render, screen } from '@testing-library/react'
import { Info } from 'phosphor-react'

import { Text } from '@coaktion/visu'

describe('Text tests', () => {
  const textText = 'Hello World'

  it('Should render a text element', () => {
    render(<Text data-testid="element">{textText}</Text>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a text element with a child text', () => {
    render(<Text data-testid="element">{textText}</Text>)
    const element = screen.getByTestId('element')

    expect(element).toHaveTextContent(textText)
  })

  it('Should render a text element with a child JSX element', () => {
    render(<Text data-testid="element"><Info /></Text>)
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('svg')
  })

  it('Should render a different element using the "as" property', () => {
    render(
      <Text data-testid="element" as="h1">
        {textText}
      </Text>
    )
    const element = screen.getByTestId('element')

    expect(element.tagName).toBe('H1')
  })
})
