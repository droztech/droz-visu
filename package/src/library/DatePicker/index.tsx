'use client'

import Calendar, { DateRange } from '../Calendar'
import Input, { InputIconProps, InputRootProps } from '../Input'
import Popover from '../Popover'

import { useState, ComponentProps } from 'react'
import { DayPicker, DayModifiers } from 'react-day-picker'

export interface DatePickerAdditionalProps {
  placeholder?: string
  onSelect: (date: Date | Date[]) => void
  date?: Date | Date[] | null
  selectionMode?: 'single' | 'range' | 'multiple'
  icon?: InputIconProps['icon']
}

export type DatePickerProps = ComponentProps<typeof DayPicker> &
  DatePickerAdditionalProps &
  InputIconProps &
  InputRootProps

const DatePicker = ({
  placeholder,
  onSelect,
  selectionMode,
  icon,
}: DatePickerProps) => {
  const [selectedDates, setSelectedDates] = useState<
    DateRange | Date | Date[] | null
  >(null)

  const handleDateSelect = (date: Date) => {
    let updatedDates: Date[] | undefined
    let dateIndex: number | undefined

    switch (selectionMode) {
      case 'single':
        setSelectedDates(date)
        onSelect(date)
        break

      case 'range':
        if (!selectedDates || !('from' in selectedDates)) {
          setSelectedDates({ from: date } as DateRange | null)
        } else if (
          selectedDates.from &&
          !selectedDates.to &&
          date > selectedDates.from
        ) {
          setSelectedDates({ ...selectedDates, to: date })
          onSelect([selectedDates.from, date])
        } else {
          setSelectedDates({ from: date } as DateRange | null)
          onSelect(date)
        }
        break

      case 'multiple':
        updatedDates = Array.isArray(selectedDates) ? [...selectedDates] : []
        dateIndex = updatedDates.findIndex(
          (selectedDate) => selectedDate.getTime() === date.getTime(),
        )
        if (dateIndex === -1) {
          updatedDates.push(date)
        } else {
          updatedDates.splice(dateIndex, 1)
        }
        updatedDates.sort((a, b) => a.getTime() - b.getTime())
        setSelectedDates(updatedDates)
        onSelect(updatedDates)
        break
    }
  }

  const modifiers: DayModifiers = {
    ...(selectionMode === 'single' &&
      selectedDates instanceof Date && { selected: [selectedDates] }),
    ...(selectionMode === 'range' &&
      selectedDates instanceof Object &&
      'from' in selectedDates &&
      'to' in selectedDates && {
        selected: { from: selectedDates.from, to: selectedDates.to },
        range:
          selectedDates.from && selectedDates.to
            ? { from: selectedDates.from, to: selectedDates.to }
            : undefined,
      }),
    ...(selectionMode === 'multiple' &&
      Array.isArray(selectedDates) && {
        selected: selectedDates.filter(
          (date): date is Date => date instanceof Date,
        ),
      }),
  }

  const getInputValue = (): string => {
    switch (selectionMode) {
      case 'single':
        if (selectedDates instanceof Date) {
          return selectedDates.toLocaleDateString()
        }
        break

      case 'range':
        if (
          typeof selectedDates === 'object' &&
          selectedDates !== null &&
          'from' in selectedDates &&
          selectedDates.to
        ) {
          return `${selectedDates.from?.toLocaleDateString()} - ${selectedDates.to?.toLocaleDateString()}`
        } else if (
          typeof selectedDates === 'object' &&
          selectedDates !== null &&
          'from' in selectedDates
        ) {
          return selectedDates.from?.toLocaleDateString() || ''
        }
        break

      case 'multiple':
        if (Array.isArray(selectedDates)) {
          return selectedDates.length === 1
            ? selectedDates[0]?.toLocaleDateString() || ''
            : `${selectedDates[0]?.toLocaleDateString()} - ${selectedDates[selectedDates.length - 1]?.toLocaleDateString()}`
        }
        break
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
          <Calendar
            className="shadow-lg"
            onDayClick={handleDateSelect}
            modifiers={modifiers}
          />
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}

DatePicker.displayName = 'DatePicker'

export default DatePicker
