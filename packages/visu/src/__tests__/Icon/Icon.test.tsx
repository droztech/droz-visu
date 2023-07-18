import { Icon } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'
import { X } from 'phosphor-react'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Icon tests', () => {
  it('Should render a Icon element', () => {
    render(
      <Icon data-testid="element">
        <X />
      </Icon>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
    expect(element?.children[0]).toBeDefined()
    expect(element?.children[0].tagName).toBe('svg')
  })

  it('Should render a Icon element as Anchor', () => {
    render(
      <Icon data-testid="element" asChild>
        <a href="">
          <X />
        </a>
      </Icon>,
    )
    const element = screen.queryByTestId('element')

    expect(element?.tagName).toBe('A')
    expect(element?.children[0].tagName).toBe('svg')
  })
})
