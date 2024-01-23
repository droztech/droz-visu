import { Accordion } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Trigger tests', () => {
  it('Should render a Accordion.Trigger element', () => {
    render(
      <Accordion.Root type="single">
        <Accordion.Item value="default">
          <Accordion.Header>
            <Accordion.Trigger data-testid="element" />
          </Accordion.Header>
          <Accordion.Content>xxx</Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>,
    )
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })
})
