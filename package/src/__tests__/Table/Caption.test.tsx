import { Table } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TableCaption tests', () => {
  it('Should render a TableCaption element', () => {
    render(<Table.Caption data-testid="element"></Table.Caption>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
