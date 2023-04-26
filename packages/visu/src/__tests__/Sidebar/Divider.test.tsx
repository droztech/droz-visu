import { Sidebar } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('SidebarDivider tests', () => {
  it('Should render a SidebarDivider element', () => {
    render(<Sidebar.Divider data-testid="element" />)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })
})
