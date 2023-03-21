import { Text } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'
import { Info } from 'phosphor-react'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

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
    render(
      <Text data-testid="element">
        <Info />
      </Text>
    )
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('svg')
  })

  it('Should render a different element using the "asChild" property', () => {
    render(
      <Text data-testid="element" asChild>
        <h1>{textText}</h1>
      </Text>
    )
    const element = screen.getByTestId('element')

    expect(element.tagName).toBe('H1')
  })
})
