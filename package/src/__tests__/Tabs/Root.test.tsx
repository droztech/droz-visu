import { Tabs } from '@library'

import { render, screen, renderHook } from '@testing-library/react'
import { clsx } from 'clsx'
import { Alien } from 'phosphor-react'
import { useRef } from 'react'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TabsRoot tests', () => {
  it('Should render a Tabs.Root element', () => {
    render(<Tabs.Root data-testid="element" triggers={[]}></Tabs.Root>)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a div element', () => {
    render(<Tabs.Root data-testid="element" triggers={[]}></Tabs.Root>)
    const element = screen.queryByTestId('element')

    expect(element?.tagName).toBe('DIV')
  })

  it('Should render Triggers inside a tablist', () => {
    render(
      <Tabs.Root
        triggers={[
          <Tabs.Trigger
            data-testid="element"
            value="tab1"
            key={'tab1'}
            title="Tab 1"
            icon={<Alien />}
          />,
        ]}
      ></Tabs.Root>,
    )
    const element = screen.queryByTestId('element')
    const tablist = element?.parentElement

    expect(tablist?.getAttribute('role')).toBe('tablist')
  })

  it('Should render Tabs.Content element inside Tabs.Root', () => {
    render(
      <Tabs.Root
        data-testid="rootElement"
        triggers={[
          <Tabs.Trigger
            value="tab1"
            key={'tab1'}
            title="Tab 1"
            icon={<Alien />}
          />,
        ]}
      >
        <Tabs.Content data-testid="element" value="tab1">
          E ai
        </Tabs.Content>
      </Tabs.Root>,
    )
    const element = screen.queryByTestId('element')
    const tablist = element?.parentElement

    expect(tablist?.getAttribute('data-testid')).toBe('rootElement')
  })

  it('Should be able to receive a ref property', () => {
    const { result } = renderHook(() => {
      const rootRef = useRef<HTMLDivElement>(null)
      return rootRef
    })

    render(
      <Tabs.Root
        data-testid="element"
        triggers={[]}
        ref={result.current}
      ></Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(result.current.current).toEqual(element)
  })
})
