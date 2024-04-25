import { Table } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TableCell tests', () => {
  it('Should render a TableCell element', () => {
    render(<Table.Cell data-testid="element"></Table.Cell>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
