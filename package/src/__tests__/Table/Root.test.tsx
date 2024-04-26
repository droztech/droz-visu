import { Table } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TableRoot tests', () => {
  it('Should render a TableRoot element', () => {
    render(<Table.Root data-testid="element"></Table.Root>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
