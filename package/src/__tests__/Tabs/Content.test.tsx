import { Tabs } from '@library'

import { render, screen, renderHook } from '@testing-library/react'
import { clsx } from 'clsx'
import { useRef } from 'react'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TabsContent tests', () => {
  it('Should render a Tabs.Content element', () => {
    render(
      <Tabs.Root triggers={[]}>
        <Tabs.Content data-testid="element" value="tab1">
          E ai
        </Tabs.Content>
      </Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a div element', () => {
    render(
      <Tabs.Root triggers={[]}>
        <Tabs.Content data-testid="element" value="tab1">
          E ai
        </Tabs.Content>
      </Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element?.tagName).toBe('DIV')
  })

  it('Should render the children inside the div element', () => {
    render(
      <Tabs.Root value="tab1" triggers={[]}>
        <Tabs.Content data-testid="element" value="tab1">
          <span>Children</span>
        </Tabs.Content>
      </Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element?.children[0]?.tagName).toBe('SPAN')
    expect(element?.children[0]?.textContent).toBe('Children')
  })

  it('Should not render the children inside the div element if value is different', () => {
    render(
      <Tabs.Root value="tab12" triggers={[]}>
        <Tabs.Content data-testid="element" value="tab1">
          <span>Children</span>
        </Tabs.Content>
      </Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element?.children[0]?.tagName).toBeUndefined()
    expect(element?.children[0]?.textContent).toBeUndefined()
  })

  it('Should be able to receive a ref property', () => {
    const { result } = renderHook(() => {
      const triggerRef = useRef<HTMLDivElement>(null)
      return triggerRef
    })

    render(
      <Tabs.Root value="tab1" triggers={[]}>
        <Tabs.Content ref={result.current} data-testid="element" value="tab1">
          <span>Children</span>
        </Tabs.Content>
      </Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(result.current.current).toEqual(element)
  })
})
