import { Accordion } from '@library'

import { render, screen } from '@testing-library/react'

describe('Root tests', () => {
  it('Should render a Accordion.Root element', () => {
    render(
      <Accordion.Root type="single" data-testid="element">
        <Accordion.Item value="default">
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
