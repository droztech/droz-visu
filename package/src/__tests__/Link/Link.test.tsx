import { Link } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Link tests', () => {
  it('Should render a Link element', () => {
    render(<Link data-testid="element"></Link>)
    const element = screen.queryByTestId('element')

    expect(element?.tagName).toBe('SPAN')
  })

  it('Should render a Link element asChild', () => {
    render(
      <Link data-testid="element" asChild>
        <a href="abc.com">Hello</a>
      </Link>,
    )
    const element = screen.queryByTestId('element')

    expect(element?.tagName).toBe('A')
  })
})
