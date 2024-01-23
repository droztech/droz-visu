import { Flex } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Flex tests', () => {
  it('Should render a Flex row element', () => {
    render(
      <Flex.Row data-testid="element">
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </Flex.Row>,
    )
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render elements under Flex row element', () => {
    render(
      <Flex.Row data-testid="element">
        <div>First</div>
        <span>Second</span>
        <h1>Third</h1>
      </Flex.Row>,
    )
    const element = screen.getByTestId('element')

    expect(element.children.length).toBe(3)
    expect(element.children[0].tagName).toBe('DIV')
    expect(element.children[1].tagName).toBe('SPAN')
    expect(element.children[2].tagName).toBe('H1')
  })

  it('Should render a different element using the "asChild" property', () => {
    render(
      <Flex.Row data-testid="element" asChild>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </Flex.Row>,
    )
    const element = screen.getByTestId('element')

    expect(element.tagName).toBe('FORM')
  })
})
