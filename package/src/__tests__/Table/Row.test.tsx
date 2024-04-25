import { Table } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TableRow tests', () => {
  it('Should render a TableRow element', () => {
    render(<Table.Row data-testid="element"></Table.Row>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
