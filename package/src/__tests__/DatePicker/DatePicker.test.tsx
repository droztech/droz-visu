import { DatePicker } from '@/src/library'

import { render } from '@testing-library/react'
import { clsx } from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('DatePicker component', () => {
  test('renders with placeholder ', () => {
    const { getByPlaceholderText } = render(
      <DatePicker placeholder="Select date" />,
    )
    expect(getByPlaceholderText('Select date')).toBeInTheDocument()
  })
})
