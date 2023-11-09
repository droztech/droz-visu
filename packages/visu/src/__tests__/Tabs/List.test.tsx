import { Tabs } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TabsList tests', () => {
  it('Should render a Tabs.List element', () => {
    render(
      <Tabs.Root>
        <Tabs.List data-testid="element">
          <Tabs.Content value="tab1">E ai</Tabs.Content>
        </Tabs.List>
      </Tabs.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
