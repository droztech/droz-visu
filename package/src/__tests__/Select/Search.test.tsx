import SearchInput from '@/src/library/Select/Search'

import { fireEvent, render } from '@testing-library/react'

describe('SearchInput tests', () => {
  beforeEach(() => {})

  it('Should render SearchInput with placeholder', () => {
    const placeholder = 'Search here...'
    const onChangeMock = jest.fn()

    const { getByPlaceholderText } = render(
      <SearchInput onChange={onChangeMock} searchPlaceholder={placeholder} />,
    )

    const inputElement = getByPlaceholderText(placeholder)
    expect(inputElement).toBeInTheDocument()
  })

  it('Should call onChange handler with input value', () => {
    const onChangeMock = jest.fn()

    const { getByPlaceholderText } = render(
      <SearchInput onChange={onChangeMock} searchPlaceholder="Search..." />,
    )

    const inputElement = getByPlaceholderText('Search...')
    const inputValue = 'Test input value'

    fireEvent.change(inputElement, { target: { value: inputValue } })

    expect(onChangeMock).toHaveBeenCalledWith(inputValue)
  })
})
