import { Menu } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('MenuDivider tests', () => {
  it('Should render a MenuDivider element', () => {
    render(<Menu.Divider data-testid="element"></Menu.Divider>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
