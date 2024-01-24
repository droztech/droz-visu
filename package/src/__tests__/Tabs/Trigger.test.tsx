import { Tabs } from '@library'
import { render, screen, renderHook } from '@testing-library/react'
import clsx from 'clsx'
import { Alien } from 'phosphor-react'
import { useRef } from 'react'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TabsTrigger tests', () => {
  it('Should render a Tabs.Trigger element', () => {
    render(
      <Tabs.Root
        triggers={[<Tabs.Trigger data-testid="element" value="tab1" key={'tab1'} title="Tab 1" icon={<Alien />} />]}
      ></Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a button element', () => {
    render(
      <Tabs.Root
        triggers={[<Tabs.Trigger data-testid="element" value="tab1" key={'tab1'} title="Tab 1" icon={<Alien />} />]}
      ></Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element?.tagName).toBe('BUTTON')
  })

  it('Should render the title inside the button element', () => {
    render(
      <Tabs.Root
        triggers={[<Tabs.Trigger data-testid="element" value="tab1" key={'tab1'} title="Tab 1" icon={<Alien />} />]}
      ></Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element?.textContent).toBe('Tab 1')
  })

  it('Should render an icon inside the button element', () => {
    render(
      <Tabs.Root
        triggers={[<Tabs.Trigger data-testid="element" value="tab1" key={'tab1'} title="Tab 1" icon={<Alien />} />]}
      ></Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element?.querySelector('svg')).toBeDefined()
  })

  it('Should be able to receive ref property', () => {
    const { result } = renderHook(() => {
      const triggerRef = useRef<HTMLButtonElement>(null)
      return triggerRef
    })

    render(
      <Tabs.Root
        triggers={[
          <Tabs.Trigger
            ref={result.current}
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

    expect(result.current.current).toEqual(element)
  })
})
