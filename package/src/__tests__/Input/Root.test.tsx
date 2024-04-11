import { Input } from '@library'

import { Envelope } from '@phosphor-icons/react'
import { fireEvent, render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Input Root tests', () => {
  it('Should render a container element', () => {
    render(<Input.Root data-testid="element"></Input.Root>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render an input element within the container element', () => {
    render(
      <Input.Root data-testid="element">
        <Input.Input />
      </Input.Root>,
    )
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('INPUT')
  })

  it('Should render an icon container within the container element', () => {
    const IconContainerId = 'IconContainer'
    render(
      <Input.Root data-testid="element">
        <Input.Input />
        <Input.Icon id={IconContainerId} icon={<></>} />
      </Input.Root>,
    )
    const element = screen.getByTestId('element')

    expect(element.children[1].id).toBe(IconContainerId)
  })

  it('Should focus the input element when clicking on the container element', () => {
    render(
      <Input.Root data-testid="element">
        <Input.Icon icon={<Envelope />} />
        <Input.Input data-testid="input" />
      </Input.Root>,
    )
    const element = screen.getByTestId('element')

    fireEvent.click(element as Element)
    expect(screen.getByTestId('input')).toHaveFocus()
  })

  it('Should disable all the children when the container is disabled', () => {
    render(
      <Input.Root data-testid="element" disabled>
        <Input.Icon icon={<Envelope />} />
        <Input.Input data-testid="input" />
      </Input.Root>,
    )
    const element = screen.getByTestId('element')

    expect(element.children[0]).toHaveProperty('disabled', true)
    expect(element.children[1]).toHaveProperty('disabled', true)
  })
})
