'use client'

import Calendar from '../Calendar'
import Input, { InputIconProps, InputRootProps } from '../Input'

import { useState, ComponentProps, useEffect, useRef } from 'react'
import { DayPicker, DayModifiers } from 'react-day-picker'

export enum DatePickerSelectionMode {
  Single = 'single',
  Range = 'range',
  Multiple = 'multiple',
}

export interface DatePickerRange {
  from: Date | undefined
  to?: Date | undefined
}

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
    DatePickerRange | Date | Date[] | null
  >(null)
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false)
  const calendarRef = useRef<HTMLDivElement>(null)

  const handleDateSelect = (date: Date) => {
    if (selectionMode === 'single') {
      setSelectedDates(date)
      onSelect(date)
    } else if (selectionMode === 'range') {
      if (!selectedDates || !('from' in selectedDates)) {
        setSelectedDates({ from: date })
      } else if (
        selectedDates.from &&
        !selectedDates.to &&
        date > selectedDates.from
      ) {
        setSelectedDates({ ...selectedDates, to: date })
        onSelect([selectedDates.from, date])
      } else {
        setSelectedDates({ from: date })
        onSelect(date)
      }
    } else if (selectionMode === 'multiple') {
      const updatedDates = Array.isArray(selectedDates)
        ? [...selectedDates]
        : []
      const dateIndex = updatedDates.findIndex(
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

  const getInputValue = (
    selectionMode: DatePickerSelectionMode,
    selectedDates: DatePickerRange | Date | Date[] | null,
  ): string => {
    if (
      selectionMode === 'range' &&
      typeof selectedDates === 'object' &&
      selectedDates !== null &&
      'from' in selectedDates &&
      selectedDates.to
    ) {
      return `${selectedDates.from?.toLocaleDateString()} - ${selectedDates.to?.toLocaleDateString()}`
    } else if (
      selectionMode === 'range' &&
      typeof selectedDates === 'object' &&
      selectedDates !== null &&
      'from' in selectedDates
    ) {
      return selectedDates.from?.toLocaleDateString() || ''
    } else if (Array.isArray(selectedDates)) {
      return selectedDates.length === 1
        ? selectedDates[0]?.toLocaleDateString() || ''
        : `${selectedDates[0]?.toLocaleDateString()} - ${selectedDates[selectedDates.length - 1]?.toLocaleDateString()}`
    } else if (selectedDates instanceof Date) {
      return selectedDates.toLocaleDateString()
    }
    return ''
  }

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      calendarRef.current &&
      !calendarRef.current.contains(event.target as Node)
    ) {
      setCalendarOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <div className="relative" ref={calendarRef}>
      <Input.Root className="mb-2">
        <Input.Input
          type="text"
          placeholder={placeholder}
          value={getInputValue(
            selectionMode as DatePickerSelectionMode,
            selectedDates,
          )}
          onClick={() => setCalendarOpen(true)}
          readOnly
        />
        <Input.Icon icon={icon} />
      </Input.Root>

      {calendarOpen && (
        <div className="absolute top-full z-50">
          <Calendar
            className="shadow-lg"
            onDayClick={handleDateSelect}
            modifiers={modifiers}
          />
        </div>
      )}
    </div>
  )
}

DatePicker.displayName = 'DatePicker'

export default DatePicker
