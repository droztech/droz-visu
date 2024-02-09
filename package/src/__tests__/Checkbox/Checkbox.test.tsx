import { Checkbox } from '@library'

import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Checkbox tests', () => {
  it('Should render a Checkbox element', () => {
    render(<Checkbox data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a Checkbox Indicator if checkbox is checked', () => {
    render(<Checkbox checked data-testid="element" />)
    const element = screen.getByTestId('element')

    expect(element?.tagName).toBe('BUTTON')
  })

  it('Should change value when clicked', async () => {
    let checked: string | boolean = false
    const user = userEvent.setup()

    render(
      <Checkbox
        checked={checked}
        onCheckedChange={(check) => (checked = check)}
        data-testid="element"
      />,
    )
    const element = screen.getByTestId('element')

    await user.click(element)
    expect(checked).toBe(true)
  })
})
