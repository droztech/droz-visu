import { Input } from '@library'
import { fireEvent, render, screen } from '@testing-library/react'
import clsx from 'clsx'
import { Envelope } from 'phosphor-react'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Input Icon tests', () => {
  it('Should render a Icon element', () => {
    render(<Input.Icon data-testid="element"></Input.Icon>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should focus the input element when clicking on the Icon element', () => {
    render(
      <Input.Root>
        <Input.Icon data-testid="icon">
          <Envelope />
        </Input.Icon>
        <Input.Input data-testid="input" />
      </Input.Root>,
    )
    const iconElement = screen.getByTestId('icon')

    fireEvent.click(iconElement as Element)
    expect(screen.getByTestId('input')).toHaveFocus()
  })

  it('Should be able to execute a function when clicked', () => {
    const clickFunction = jest.fn()
    render(
      <Input.Icon data-testid="icon" onClick={clickFunction}>
        <Envelope />
      </Input.Icon>,
    )

    const iconElement = screen.getByTestId('icon')
    fireEvent.click(iconElement as Element)

    expect(clickFunction).toHaveBeenCalledTimes(1)
  })

  it('Should not be able to execute a click function when the icon element is disabled', () => {
    const clickFunction = jest.fn()
    render(
      <Input.Icon data-testid="icon" onClick={clickFunction} disabled>
        <Envelope />
      </Input.Icon>,
    )

    const iconElement = screen.getByTestId('icon')
    fireEvent.click(iconElement as Element)

    expect(clickFunction).toHaveBeenCalledTimes(0)
  })
})
