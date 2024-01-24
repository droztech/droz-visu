import { FloatCard } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('FloatCardContent tests', () => {
  it('Should render a FloatCardContent element', () => {
    render(
      <FloatCard.Root>
        <FloatCard.Content data-testid="element"></FloatCard.Content>
      </FloatCard.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
