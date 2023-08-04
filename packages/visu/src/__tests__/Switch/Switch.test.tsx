import { Switch } from '@library'
import { render, screen, fireEvent } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('Switch tests', () => {
  it('Should render a Switch element', () => {
    render(<Switch data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a Switch element with label off', () => {
    render(<Switch data-testid="element" label />)
    const element = screen.queryByTestId('element')

    expect(element).toContainHTML('Off')
    expect(element).not.toContainHTML('On')
  })

  it('Should render a Switch element with label on', () => {
    render(<Switch data-testid="element" label value={true} />)
    const element = screen.queryByTestId('element')

    expect(element).toContainHTML('On')
    expect(element).not.toContainHTML('Off')
  })

  it('Should render a Switch element without label', () => {
    render(<Switch data-testid="element" value={true} />)
    const element = screen.queryByTestId('element')

    expect(element).not.toContainHTML('On')
    expect(element).not.toContainHTML('Off')
  })

  it('Should render a checked Switch element using the "value" property', () => {
    render(<Switch data-testid="element" value={true} />)
    const element = screen.queryByTestId('element')

    expect(element).toHaveAttribute('data-state', 'checked')
  })

  /**
   * @deprecated - Teste para uma propriedade deprecated
   */
  it('Should render a checked Switch element using the "checked" property', () => {
    render(<Switch data-testid="element" checked={true} />)
    const element = screen.queryByTestId('element')

    expect(element).toHaveAttribute('data-state', 'checked')
  })

  it('Should call "onChange" method when clicked', () => {
    const onChangeMock = jest.fn()

    render(<Switch data-testid="element" onChange={onChangeMock} />)
    const element = screen.getByTestId('element')

    fireEvent.click(element)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  /**
   * @deprecated - Teste para um metodo deprecated
   */
  it('Should call "onCheckedChange" method when clicked', () => {
    const onCheckedChangeMock = jest.fn()

    render(
      <Switch data-testid="element" onCheckedChange={onCheckedChangeMock} />,
    )
    const element = screen.getByTestId('element')

    fireEvent.click(element)

    expect(onCheckedChangeMock).toHaveBeenCalledTimes(1)
  })
})
