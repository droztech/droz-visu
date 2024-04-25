'use client'

import Calendar, { CalendarProps } from '../Calendar'
import Input, { InputIconProps } from '../Input'
import Popover from '../Popover'

export type DatePickerProps = CalendarProps & {
  placeholder?: string
  icon?: InputIconProps['icon']
  value?: string
}

export const formatDate = (
  date?: Date | string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  },
  language?: Intl.LocalesArgument,
) => {
  const opt: Intl.DateTimeFormatOptions = {
    ...options,
  }
  return date && new Date(date).toLocaleString(language, opt)
}

const DatePicker = ({ placeholder, icon, ...rest }: DatePickerProps) => {
  const getInputValue = () => {
    // SINGLE
    if (rest.selected instanceof Date) {
      return formatDate(rest.selected)
    }
    // RANGE
    if (
      rest.selected &&
      typeof rest.selected === 'object' &&
      'from' in rest.selected &&
      'to' in rest.selected &&
      rest.selected.from instanceof Date &&
      rest.selected.to instanceof Date
    ) {
      const { from, to } = rest.selected
      return `${formatDate(from)} - ${formatDate(to)}`
    }
    // MULTIPLE
    if (
      Array.isArray(rest.selected) &&
      rest.selected.every((item) => item instanceof Date)
    ) {
      const dates: Date[] = rest.selected as Date[]
      dates.sort((a, b) => a.getTime() - b.getTime())
      if (dates.length === 1) {
        return formatDate(dates[0] as Date)
      }
      if (dates.length > 1) {
        const startDate = formatDate(dates[0] as Date)
        const endDate = formatDate(dates[dates.length - 1] as Date)
        return `${startDate} - ${endDate}`
      }
      return ''
    }
    return ''
  }

  return (
    <div className="relative">
      <Popover.Root>
        <Popover.Trigger>
          <Input.Root className="mb-2">
            <Input.Input
              type="text"
              placeholder={placeholder}
              value={getInputValue()}
              readOnly
            />
            <Input.Icon icon={icon} />
          </Input.Root>
        </Popover.Trigger>
        <Popover.Content>
          <Calendar {...rest} className="shadow-lg" />
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}

DatePicker.displayName = 'DatePicker'

export default DatePicker
