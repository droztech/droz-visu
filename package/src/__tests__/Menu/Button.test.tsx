import { Menu } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'
import { House } from 'phosphor-react'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('MenuButton tests', () => {
  it('Should render a MenuButton element', () => {
    render(<Menu.Button icon={<House />} text="Home" data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a MenuButton icon', () => {
    render(<Menu.Button icon={<House />} text="Home" data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element?.children[0].children[0].tagName).toBe('svg')
  })

  it('Should render a MenuButton text', () => {
    render(<Menu.Button icon={<House />} text="Home" data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element?.children[1].tagName).toBe('SPAN')
    expect(element?.children[1].textContent).toBe('Home')
  })
})
