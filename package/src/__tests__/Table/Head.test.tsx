import { Table } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TableHead tests', () => {
  it('Should render a TableHead element', () => {
    render(<Table.Head data-testid="element"></Table.Head>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
