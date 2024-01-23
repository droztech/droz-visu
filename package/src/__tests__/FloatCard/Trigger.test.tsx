import { FloatCard } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('FloatCardTrigger tests', () => {
  it('Should render a FloatCardTrigger element', () => {
    render(
      <FloatCard.Root>
        <FloatCard.Trigger data-testid="element"></FloatCard.Trigger>
      </FloatCard.Root>
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
