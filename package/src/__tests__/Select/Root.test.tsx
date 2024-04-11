import { Select } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('SelectRoot tests', () => {
  it('Should render a SelectRoot element', () => {
    render(
      <Select.Root data-testid="element">
        <Select.Item value="yes">Sim</Select.Item>
        <Select.Item value="no">Não</Select.Item>
      </Select.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should remove the border when the borderless prop is true', () => {
    render(
      <Select.Root data-testid="element" borderless>
        <Select.Item value="yes">Sim</Select.Item>
        <Select.Item value="no">Não</Select.Item>
      </Select.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toHaveClass('border-none outline-none')
  })
})
