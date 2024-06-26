import { TagList } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('TagList tests', () => {
  it('Should render an input element within the container element', () => {
    render(
      <TagList data-testid="element">
        <input type="text" data-testid="input" />
      </TagList>,
    )
    const element = screen.getByTestId('element')

    expect(element.firstElementChild?.tagName).toBe('INPUT')
  })

  it('Should render tags', () => {
    const tags = ['1', '2', '3', '4', '5']

    render(
      <div data-testid="element">
        <TagList value={tags}></TagList>
      </div>,
    )
    const element = screen.getByTestId('element')

    expect(element.children[0].children[0].children.length).toBe(tags.length)
  })
})
