import { File } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('File tests', () => {
  it('Should render a File element', () => {
    render(<File data-testid="element"></File>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
