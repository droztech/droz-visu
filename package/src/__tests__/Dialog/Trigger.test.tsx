import { Dialog } from '@library'

import { render, screen } from '@testing-library/react'

const dialogTestId = 'dialog-test-id'

describe('DialogTrigger tests', () => {
  it('Should have the displayName equal to "Dialog.Trigger"', () => {
    expect(Dialog.Trigger.displayName).toEqual('Dialog.Trigger')
  })

  it('Should render a Dialog.Trigger element', () => {
    render(
      <Dialog.Root open>
        <Dialog.Trigger data-testid={dialogTestId}>
          <button>Modal</button>
        </Dialog.Trigger>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toBeInTheDocument()
  })

  it('Should render a children element in Dialog.Trigger', () => {
    render(
      <Dialog.Root open>
        <Dialog.Trigger>
          <button data-testid={dialogTestId}>Modal</button>
        </Dialog.Trigger>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toBeInTheDocument()
  })
})
