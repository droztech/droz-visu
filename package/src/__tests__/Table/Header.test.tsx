import { Table } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TableHeader tests', () => {
  it('Should render a TableHeader element', () => {
    render(<Table.Header data-testid="element"></Table.Header>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
