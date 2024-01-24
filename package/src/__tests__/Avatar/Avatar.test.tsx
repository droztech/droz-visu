import { Avatar } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Avatar tests', () => {
  it('Should render a Avatar element', () => {
    render(
      <Avatar.Root data-testid="element">
        <Avatar.Image src="" alt="" />
      </Avatar.Root>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  // TODO: Retornar nesse teste
  it.skip('Should render an Image element inside Avatar', async () => {
    const ImageAltText = 'Image Alt'

    render(
      <Avatar.Root>
        <Avatar.Image src="" alt={ImageAltText} />
      </Avatar.Root>,
    )
    const element = await screen.findByAltText(ImageAltText)

    expect(element?.tagName).toBe('IMG')
  })

  it('Should render a Fallback element with given text', async () => {
    const fallbackTextContent = 'EX'

    render(
      <Avatar.Root data-testid="element">
        <Avatar.Image src="" />
        <Avatar.Fallback fallback={fallbackTextContent} data-testid="fallback" delayMs={0} />
      </Avatar.Root>,
    )
    const element = await screen.findByTestId('fallback')

    expect(element?.tagName).toBe('SPAN')
    expect(element?.textContent).toBe(fallbackTextContent)
  })
})
