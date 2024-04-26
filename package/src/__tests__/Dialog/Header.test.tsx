import { Dialog } from '@library'

import { SquaresFour } from '@phosphor-icons/react'
import { render, screen } from '@testing-library/react'

const dialogTestId = 'dialog-test-id'

describe('DialogHeader tests', () => {
  it('Should have the displayName equal to "Dialog.Header"', () => {
    expect(Dialog.Header.displayName).toEqual('Dialog.Header')
  })

  it('Should render a Dialog.Header element', () => {
    render(
      <Dialog.Root open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Header data-testid={dialogTestId} title="Header" />
        </Dialog.Content>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toBeInTheDocument()
  })

  it('Should render a title in Dialog.Header', () => {
    const title = 'Header title'
    render(
      <Dialog.Root open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Header data-testid={dialogTestId} title={title} />
        </Dialog.Content>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toContainHTML(title)
  })

  it('Should render a title icon in Dialog.Header by titleIcon property', () => {
    const title = 'Header title'
    const titleIconTestId = 'title-icon'

    render(
      <Dialog.Root open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Header
            data-testid={dialogTestId}
            title={title}
            titleIcon={<SquaresFour data-testid={titleIconTestId} />}
          />
        </Dialog.Content>
      </Dialog.Root>,
    )
    const titleIconElement = screen.getByTestId(titleIconTestId)

    expect(titleIconElement).toBeInTheDocument()
  })

  it('Should not render a close button in Dialog.Header if withClose property has value false', () => {
    const title = 'Header title'

    render(
      <Dialog.Root data-testid="element"open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Header
            data-testid={dialogTestId}
            title={title}
            withClose={false}
          />
        </Dialog.Content>
      </Dialog.Root>,
    )
    const closeButtonElement = screen.queryByTestId('element')

    expect(closeButtonElement).toBeNull()
  })
})
