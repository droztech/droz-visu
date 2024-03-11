import { TagInput } from '@library'

import { Envelope } from '@phosphor-icons/react'
import { fireEvent, render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Input Icon tests', () => {
  it('Should render a Icon element', () => {
    render(<TagInput.Icon data-testid="element" icon={<></>} />)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should focus the input element when clicking on the Icon element', () => {
    render(
      <TagInput.Root>
        <TagInput.Icon data-testid="icon" icon={<Envelope />} />
        <TagInput.Input data-testid="input" />
      </TagInput.Root>,
    )
    const iconElement = screen.getByTestId('icon')

    fireEvent.click(iconElement as Element)
    expect(screen.getByTestId('input')).toHaveFocus()
  })

  it('Should be able to execute a function when clicked', () => {
    const clickFunction = jest.fn()
    render(
      <TagInput.Icon
        data-testid="icon"
        onClick={clickFunction}
        icon={<Envelope />}
      />,
    )

    const iconElement = screen.getByTestId('icon')
    fireEvent.click(iconElement as Element)

    expect(clickFunction).toHaveBeenCalledTimes(1)
  })

  it('Should not be able to execute a click function when the icon element is disabled', () => {
    const clickFunction = jest.fn()
    render(
      <TagInput.Icon
        data-testid="icon"
        onClick={clickFunction}
        disabled
        icon={<Envelope />}
      />,
    )

    const iconElement = screen.getByTestId('icon')
    fireEvent.click(iconElement as Element)

    expect(clickFunction).toHaveBeenCalledTimes(0)
  })
})
