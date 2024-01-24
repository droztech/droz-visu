import { Sidebar } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('SidebarLayout tests', () => {
  it('Should render a SidebarLayout element', () => {
    render(<Sidebar.Layout data-testid="element"></Sidebar.Layout>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a SidebarLayout element with a child', () => {
    render(
      <Sidebar.Layout data-testid="element">
        <div></div>
        <div></div>
      </Sidebar.Layout>,
    )
    const element = screen.getByTestId('element')

    expect(element.children.length).toBe(2)
  })
})
