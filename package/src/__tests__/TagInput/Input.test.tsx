import { TagInput } from '@library'

import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Input Input tests', () => {
  const inputEmail = 'email@email.com'

  it('Should render a input element', () => {
    render(<TagInput.Input data-testid="element" />)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should write on input element', async () => {
    render(<TagInput.Input data-testid="element" />)
    const element = screen.getByTestId('element')

    await userEvent.type(element, inputEmail)

    expect(element).toHaveValue(inputEmail)
  })

  it('Should not be able to write when input element is disabled', async () => {
    render(<TagInput.Input data-testid="element" disabled />)
    const element = screen.getByTestId('element')

    await userEvent.type(element, inputEmail)

    expect(element).toHaveValue('')
  })
})
