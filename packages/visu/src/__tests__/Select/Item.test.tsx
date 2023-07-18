import { Select } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('SelectItem tests', () => {
  it('Should render a SelectItem element', () => {
    render(
      <Select.Root>
        <Select.Item data-testid="elementYes" value="yes">
          Sim
        </Select.Item>
        <Select.Item data-testid="elementNo" value="no">
          Não
        </Select.Item>
      </Select.Root>
    )
    const elementYes = screen.queryByTestId('elementYes')
    const elementNo = screen.queryByTestId('elementNo')

    expect(elementYes).toBeDefined()
    expect(elementNo).toBeDefined()
  })
})
