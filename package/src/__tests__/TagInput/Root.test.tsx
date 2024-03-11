import { TagInput } from '@library'

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
    render(<TagInput.Root data-testid="element"></TagInput.Root>)
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render an input element within the container element', () => {
    render(
      <TagInput.Root data-testid="element">
        <TagInput.Input />
      </TagInput.Root>,
    )
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('INPUT')
  })

  it('Should render an icon container within the container element', () => {
    const IconContainerId = 'IconContainer'
    render(
      <TagInput.Root data-testid="element">
        <TagInput.Input />
        <TagInput.Icon id={IconContainerId} icon={<></>} />
      </TagInput.Root>,
    )
    const element = screen.getByTestId('element')

    expect(element.children[1].id).toBe(IconContainerId)
  })

  it('Should focus the input element when clicking on the container element', () => {
    render(
      <TagInput.Root data-testid="element">
        <TagInput.Icon icon={<Envelope />} />
        <TagInput.Input data-testid="input" />
      </TagInput.Root>,
    )
    const element = screen.getByTestId('element')

    fireEvent.click(element as Element)
    expect(screen.getByTestId('input')).toHaveFocus()
  })

  it('Should disable all the children when the container is disabled', () => {
    render(
      <TagInput.Root data-testid="element" disabled>
        <TagInput.Icon icon={<Envelope />} />
        <TagInput.Input data-testid="input" />
      </TagInput.Root>,
    )
    const element = screen.getByTestId('element')

    expect(element.children[0]).toHaveProperty('disabled', true)
    expect(element.children[1]).toHaveProperty('disabled', true)
  })

  it('Should render tags', () => {
    const tags = ['1', '2', '3', '4', '5']

    render(
      <div data-testid="element">
        <TagInput.Root value={tags}>
          <TagInput.Input data-testid="input" />
        </TagInput.Root>
      </div>,
    )
    const element = screen.getByTestId('element')

    expect(element.children[0].children[0].children.length).toBe(tags.length)
  })
})
