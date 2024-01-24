import { ToastProvider, ToastProviderProps, useToast } from '@library'
import { RenderOptions, act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import clsx from 'clsx'
import { FC } from 'react'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

interface CustomRenderProps extends RenderOptions {
  providerProps: ToastProviderProps
}

const customRender = (ui: JSX.Element, { providerProps, ...renderOptions }: CustomRenderProps) => {
  return render(<ToastProvider {...providerProps}>{ui}</ToastProvider>, renderOptions)
}

describe('ToastToast tests', () => {
  it('Should render a ToastProvider element', async () => {
    const user = userEvent.setup()
    const toastTitle = 'Titulo do toast'
    const toastDescription = 'Descrição do toast'

    const TestComponent: FC = () => {
      const { toast } = useToast()

      return (
        <div>
          <button data-testid="element" onClick={() => toast.success({ desc: toastDescription, title: toastTitle })}>
            Exec Toast
          </button>
        </div>
      )
    }

    customRender(<TestComponent />, {
      providerProps: {
        children: '',
        posX: 'left',
        posY: 'bottom',
      },
    })
    const element = screen.getByTestId('element')

    await act(async () => {
      await user.click(element)
    })

    const provider = await screen.findByText(toastTitle)

    expect(provider).toBeInTheDocument()
  })

  it('Should render a ToastProvider element', async () => {
    jest.spyOn(console, 'error').mockReturnValue()
    expect.assertions(1)

    const TestErrorComponent: FC = () => {
      useToast()

      return <div></div>
    }

    expect(() => render(<TestErrorComponent />)).toThrowError()
  })
})
