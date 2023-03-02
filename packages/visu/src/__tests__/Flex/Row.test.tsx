import { Flex } from '@library'
import { render, screen } from '@testing-library/react'

describe('Flex tests', () => {
  it('Should render a Flex row element', () => {
    render(
      <Flex.Row data-testid="element">
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Flex.Row>
    )
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a different element using the "asChild" property', () => {
    render(
      <Flex.Row data-testid="element" asChild>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </Flex.Row>
    )
    const element = screen.getByTestId('element')

    expect(element.tagName).toBe('FORM')
  })
})
