import { DatePicker } from '@/src/library'
import { formatDate } from '@/src/library/DatePicker'

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

  test('formatDate function formats date correctly', () => {
    const formattedDate = formatDate(new Date('2024-04-25'), undefined, 'pt-BR')
    expect(formattedDate).toBe('25/04/2024, 00:00:00')
  })
})
