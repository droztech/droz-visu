import { Sidebar } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'
import { House } from 'phosphor-react'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('SidebarButton tests', () => {
  it('Should render a SidebarButton element', () => {
    render(<Sidebar.Button data-testid="element" icon={<House />} text="Home" />)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a SidebarButton element with icon and text', () => {
    render(<Sidebar.Button data-testid="element" icon={<House />} text="Home" />)
    const element = screen.getByTestId('element')

    expect(element.children[0].children[0].tagName).toBe('svg')
    expect(element.children[1].tagName).toBe('SPAN')
  })
})
