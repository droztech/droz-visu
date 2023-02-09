import { render, screen } from '@testing-library/react'
import { CheckCircle } from 'phosphor-react'

import { Button } from '@library'

describe('Button Icon tests', () => {

  it('Should render a container element', () => {
    render(<Button.Icon data-testid="element">{}</Button.Icon>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a container with an svg child', () => {
    render(<Button.Icon data-testid="element"><CheckCircle /></Button.Icon>)
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('svg')
  })
})
