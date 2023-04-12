import { Radio } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('RadioItem tests', () => {
  it('Should render a RadioItem element', () => {
    render(
      <Radio.Root>
        <Radio.Item value="opt1" data-testid="element">
          Option One
        </Radio.Item>
      </Radio.Root>
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
