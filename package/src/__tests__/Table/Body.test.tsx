import { Table } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TableBody tests', () => {
  it('Should render a TableBody element', () => {
    render(<Table.Body data-testid="element"></Table.Body>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
