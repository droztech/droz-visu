'use client'

import { cn } from '@/src/utils/class-merge.helper'

import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useState, ComponentProps } from 'react'
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
  selectionMode: 'single' | 'range' | 'multiple'
}

export type DatePickerProps = ComponentProps<typeof DayPicker> &
  DatePickerAdditionalProps

const DatePicker = ({
  placeholder,
  onSelect,
  selectionMode,
  className,
  classNames,
  showOutsideDays = true,
  ...rest
}: DatePickerProps) => {
  const [selectedDates, setSelectedDates] = useState<
    DatePickerRange | Date | Date[] | null
  >(null)

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
        selected: [selectedDates.from, selectedDates.to].filter(
          (date): date is Date => date instanceof Date,
        ),
        from: selectedDates.from,
        to: selectedDates.to,
      }),
    ...(selectionMode === 'multiple' &&
      Array.isArray(selectedDates) && {
        selected: selectedDates.filter(
          (date): date is Date => date instanceof Date,
        ),
      }),
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={
          Array.isArray(selectedDates)
            ? `${selectedDates[0]?.toLocaleDateString()} - ${selectedDates[selectedDates.length - 1]?.toLocaleDateString()}`
            : selectedDates instanceof Date
              ? selectedDates.toLocaleDateString()
              : ''
        }
        readOnly
        className="focus:ring-blue-300 w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 focus:outline-none focus:ring"
      />
      <DayPicker
        onDayClick={handleDateSelect}
        showOutsideDays={showOutsideDays}
        modifiers={modifiers}
        className={cn('rounded-md bg-gray-100 p-4 shadow', className)}
        classNames={{
          months: 'flex flex-col',
          month: 'space-y-4',
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-medium',
          nav: 'space-x-1 flex items-center',
          nav_button:
            'p-1 rounded-full bg-primary-100 text-primary hover:bg-primary-200 active:bg-primary-200',
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell: 'text-gray-500 rounded-md w-9 font-normal text-[0.8rem]',
          row: 'flex w-full mt-2',
          cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-100/50 [&:has([aria-selected])]:bg-gray-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative',
          day: 'w-full h-full rounded-md hover:border border-primary-200',
          day_range_end: 'day-range-end rounded-l-none !bg-primary',
          day_range_start: 'day-range-start rounded-r-none !bg-primary',
          day_selected: 'bg-primary text-gray-100 rounded-md',
          day_today: 'border !border-primary',
          day_outside:
            'day-outside text-gray-500 opacity-25 aria-selected:bg-gray-100/50 aria-selected:text-gray-500 aria-selected:opacity-30',
          day_disabled: 'text-gray-500 opacity-25',
          day_range_middle:
            'aria-selected:bg-primary-200 aria-selected:text-gray-800 rounded-none',
          day_hidden: 'opacity-0',
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...rest }) => (
            <CaretLeft className="h-4 w-4 bg-error" {...rest} />
          ),
          IconRight: ({ ...rest }) => (
            <CaretRight className="h-4 w-4" {...rest} />
          ),
        }}
        {...rest}
      />
    </div>
  )
}

DatePicker.displayName = 'DatePicker'

export default DatePicker
