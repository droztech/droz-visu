'use client'

import { cn } from '@/src/utils/class-merge.helper'

import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { ComponentProps } from 'react'
import { DayPicker } from 'react-day-picker'

export enum DateSelectionMode {
  Single = 'single',
  Range = 'range',
  Multiple = 'multiple',
}

export type DateRange = {
  toLocaleDateString: any
  from: Date | undefined
  to?: Date | undefined
}

export type CalendarProps = ComponentProps<typeof DayPicker>

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...rest
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('rounded-md bg-gray-100 p-4', className)}
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
  )
}
Calendar.displayName = 'Calendar'

export default Calendar
