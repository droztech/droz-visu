import { Pagination } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Pagination tests', () => {
  it('Should render a Pagination element', () => {
    render(<Pagination current={7} pageCount={14} onPageChange={jest.fn()} data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
