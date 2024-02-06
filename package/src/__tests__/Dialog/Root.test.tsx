import { Dialog } from '@library'

import { render, screen } from '@testing-library/react'

const dialogTestId = 'dialog-test-id'

describe('DialogRoot tests', () => {
  it('Should have the displayName equal to "Dialog.Root"', () => {
    expect(Dialog.Root.displayName).toEqual('Dialog.Root')
  })

  it('Should render a Dialog.Root element', () => {
    render(
      <Dialog.Root>
        <Dialog.Trigger data-testid={dialogTestId}>
          <button>Modal</button>
        </Dialog.Trigger>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toBeInTheDocument()
  })
})
