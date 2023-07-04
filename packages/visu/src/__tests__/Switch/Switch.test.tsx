import { Switch } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Switch tests', () => {
  it('Should render a Switch element', () => {
    render(<Switch data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
    expect(element).not.toContainHTML('On')
    expect(element).not.toContainHTML('Off')
  })

  it('Should render a Switch element with label off', () => {
    render(<Switch data-testid="element" label />)
    const element = screen.queryByTestId('element')

    expect(element).toContainHTML('Off')
    expect(element).not.toContainHTML('On')
  })

  it('Should render a Switch element with label on', () => {
    render(<Switch data-testid="element" label checked />)
    const element = screen.queryByTestId('element')

    expect(element).toContainHTML('On')
    expect(element).not.toContainHTML('Off')
  })
})
