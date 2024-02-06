import { Button } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'
import { CheckCircle } from 'phosphor-react'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Button Icon tests', () => {
  it('Should render a container element', () => {
    render(<Button.Icon data-testid="element">{}</Button.Icon>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a container with an svg child', () => {
    render(
      <Button.Icon data-testid="element">
        <CheckCircle />
      </Button.Icon>,
    )
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('svg')
  })
})
