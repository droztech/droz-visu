import { Accordion } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Item tests', () => {
  it('Should render a Accordion.Item element', () => {
    render(
      <Accordion.Root type="single">
        <Accordion.Item value="default" data-testid="element">
          <Accordion.Header>
            <Accordion.Trigger />
          </Accordion.Header>
          <Accordion.Content>xxx</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>,
    )
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })
})
