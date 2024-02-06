import { Sidebar } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('SidebarRoot tests', () => {
  it('Should render a SidebarRoot element', () => {
    render(<Sidebar.Root data-testid="element"></Sidebar.Root>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a SidebarRoot element without expand button', () => {
    render(<Sidebar.Root data-testid="element"></Sidebar.Root>)
    const element = screen.getByTestId('element')

    expect(element.children.length).toBe(0)
  })

  it('Should render a SidebarRoot element with expand button', () => {
    render(
      <Sidebar.Root
        data-testid="element"
        setExpanded={jest.fn()}
      ></Sidebar.Root>,
    )
    const element = screen.getByTestId('element')

    expect(element.children[0].tagName).toBe('BUTTON')
    expect(element.children[0].children[0].tagName).toBe('svg')
  })

  it('Should render a SidebarRoot element with a child', () => {
    render(
      <Sidebar.Root data-testid="element">
        <div></div>
        <div></div>
      </Sidebar.Root>,
    )
    const element = screen.getByTestId('element')

    expect(element.children.length).toBe(2)
  })
})
