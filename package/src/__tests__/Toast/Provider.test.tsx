import { ToastProvider } from '@library'

import { render, screen } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('ToastToast tests', () => {
  it('Should render a ToastProvider element', () => {
    render(
      <ToastProvider posX="right" posY="bottom">
        <div>Toast</div>
      </ToastProvider>,
    )
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })
})
