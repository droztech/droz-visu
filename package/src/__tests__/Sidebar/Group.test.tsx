import { Sidebar } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('SidebarGroup tests', () => {
  it('Should render a SidebarGroup element', () => {
    render(<Sidebar.Group data-testid="element"></Sidebar.Group>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a SidebarGroup element with a child', () => {
    render(
      <Sidebar.Group data-testid="element">
        <div></div>
        <div></div>
      </Sidebar.Group>,
    )
    const element = screen.getByTestId('element')

    expect(element.children.length).toBe(2)
  })
})
