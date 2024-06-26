import { Dialog } from '@library'

import { render, screen } from '@testing-library/react'

const dialogTestId = 'dialog-test-id'

describe('DialogContent tests', () => {
  it('Should have the displayName equal to "Dialog.Content"', () => {
    expect(Dialog.Content.displayName).toEqual('Dialog.Content')
  })

  it('Should render a Dialog.Content element', () => {
    render(
      <Dialog.Root open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content data-testid={dialogTestId}>Content</Dialog.Content>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toBeInTheDocument()
  })

  it('Should render a children element in Dialog.Content', () => {
    render(
      <Dialog.Root open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content data-testid={dialogTestId}>Content</Dialog.Content>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toContainHTML('Content')
  })

  it('Should not render an Overlay when Dialog.Content is shown, but contains the overlay property with the value false', () => {
    render(
      <Dialog.Root data-testid="element" open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content overlay={false}>Content</Dialog.Content>
      </Dialog.Root>,
    )
    const overlayElement = screen.queryByTestId('element')

    expect(overlayElement).toBeNull()
  })
})
