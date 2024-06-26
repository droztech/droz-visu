'use client'

import Calendar, { CalendarProps } from '../Calendar'
import Input, { InputIconProps } from '../Input'
import Popover from '../Popover'

type DatePickerProps = CalendarProps & {
  placeholder?: string
  icon?: InputIconProps['icon']
  options?: Intl.DateTimeFormatOptions
  className?: string
  align?: 'center' | 'start' | 'end' | undefined
}

export const formatDate = (
  date?: Date | string,
  options?: Intl.DateTimeFormatOptions,
  language?: Intl.LocalesArgument,
) => {
  const opt: Intl.DateTimeFormatOptions = {
    ...options,
  }
  return date && new Date(date).toLocaleString(language, opt)
}

const DatePicker = ({
  placeholder,
  icon,
  options,
  className,
  align,
  ...rest
}: DatePickerProps) => {
  const formatDates = (dates: Date[]) => {
    dates.sort((a, b) => a.getTime() - b.getTime())
    if (dates.length === 1) {
      return formatDate(dates[0], options)
    }
    if (dates.length > 1) {
      const startDate = formatDate(dates[0], options)
      const endDate = formatDate(dates[dates.length - 1], options)
      return `${startDate} - ${endDate}`
    }
    return ''
  }

  const getInputValue = (selected: any) => {
    if (selected instanceof Date) {
      return formatDates([selected])
    }
    if (selected?.from instanceof Date && selected?.to instanceof Date) {
      return formatDates([selected.from, selected.to])
    }
    if (
      Array.isArray(selected) &&
      selected.every((item) => item instanceof Date)
    ) {
      return formatDates(selected)
    }
    return ''
  }

  return (
    <Popover.Root>
      <Popover.Trigger className={className}>
        <Input.Root className="mb-2">
          <Input.Input
            type="text"
            placeholder={placeholder}
            value={getInputValue(rest.selected)}
            readOnly
          />
          <Input.Icon icon={icon} />
        </Input.Root>
      </Popover.Trigger>
      <Popover.Content align={align}>
        <Calendar className="shadow-lg" {...rest} />
      </Popover.Content>
    </Popover.Root>
  )
}

DatePicker.displayName = 'DatePicker'

export default DatePicker
