import { Avatar } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Avatar tests', () => {
  it('Should render a Avatar element', () => {
    render(<Avatar data-testid="element" src="" alt="" fallback="" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  // TODO: Retornar nesse teste
  it.skip('Should render an Image element inside Avatar', async () => {
    const ImageAltText = 'Image Alt'

    render(<Avatar src="" alt={ImageAltText} fallback="" />)
    const element = await screen.findByAltText(ImageAltText)

    expect(element?.tagName).toBe('IMG')
  })

  it('Should render a Fallback element with given text', async () => {
    const fallbackTextContent = 'EX'

    render(
      <Avatar
        src=""
        fallback={fallbackTextContent}
        alt=""
        data-testid="fallback"
      />,
    )
    const element = await screen.findByTestId('fallback')

    expect(element?.tagName).toBe('SPAN')
    expect(element?.textContent).toBe(fallbackTextContent)
  })
})
