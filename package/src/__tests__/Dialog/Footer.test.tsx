import { Dialog } from '@library'
import { render, screen } from '@testing-library/react'

const dialogTestId = 'dialog-test-id'

describe('DialogFooter tests', () => {
  it('Should have the displayName equal to "Dialog.Footer"', () => {
    expect(Dialog.Footer.displayName).toEqual('Dialog.Footer')
  })

  it('Should render a Dialog.Footer element', () => {
    render(
      <Dialog.Root open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Footer data-testid={dialogTestId}>Footer</Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toBeInTheDocument()
  })

  it('Should render a children element in Dialog.Footer', () => {
    render(
      <Dialog.Root open>
        <Dialog.Trigger>
          <button>Modal</button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Footer data-testid={dialogTestId}>Footer</Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>,
    )
    const element = screen.getByTestId(dialogTestId)

    expect(element).toContainHTML('Footer')
  })
})
