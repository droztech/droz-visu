import { Icon } from '@library'

import { X } from '@phosphor-icons/react'
import { render, screen } from '@testing-library/react'

describe('Icon tests', () => {
  it('Should render a Icon element', () => {
    render(
      <Icon data-testid="element">
        <X />
      </Icon>,
    )
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
    expect(element?.children[0]).toBeDefined()
    expect(element?.children[0].tagName).toBe('svg')
  })

  it('Should render a Icon element as Anchor', () => {
    render(
      <Icon data-testid="element" asChild>
        <a href="google.com">
          <X />
        </a>
      </Icon>,
    )
    const element = screen.getByTestId('element')

    expect(element?.tagName).toBe('A')
    expect(element?.children[0].tagName).toBe('svg')
  })
})
