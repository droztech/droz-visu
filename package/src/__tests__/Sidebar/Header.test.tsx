import { Sidebar } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('SidebarHeader tests', () => {
  it('Should render a SidebarHeader element', () => {
    render(<Sidebar.Header data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
