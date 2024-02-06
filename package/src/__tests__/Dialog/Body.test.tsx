import { Dialog } from '@library'

import { render, screen } from '@testing-library/react'

const dialogTestId = 'dialog-test-id'

describe('DialogBody tests', () => {
  it('Should have the displayName equal to "Dialog.Body"', () => {
    expect(Dialog.Body.displayName).toEqual('Dialog.Body')
  })

  it('Should render a Dialog.Body element', () => {
    render(
      <Dialog.Root open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Body data-testid={dialogTestId}>Body</Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toBeInTheDocument()
  })

  it('Should render a children element in Dialog.Body', () => {
    render(
      <Dialog.Root open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Body data-testid={dialogTestId}>Body</Dialog.Body>
        </Dialog.Content>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toContainHTML('Body')
  })
})
