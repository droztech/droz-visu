import Popover from '../Popover'

import { cn } from '@/src/utils/class-merge.helper'

import { CaretUpDown } from '@phosphor-icons/react'
import { CommandRoot } from 'cmdk'
import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

export interface ComboboxRootProps
  extends ComponentPropsWithoutRef<typeof CommandRoot> {
  placeholder: string
  value?: string
}

const ComboboxRoot: FC<ComboboxRootProps> = forwardRef<
  ElementRef<typeof CommandRoot>,
  ComboboxRootProps
>(({ className, placeholder, value, ...rest }, ref) => {
  return (
    <Popover.Root>
      <Popover.Trigger
        className={cn(
          'flex min-h-10 items-center justify-between gap-4 rounded-lg border border-gray bg-transparent px-4 py-2 text-sm text-inherit transition-colors hover:border-gray-700 active:border-primary disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray',
          !value && 'text-gray-400',
          className,
        )}
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          {value && value !== '' ? value : placeholder}
        </span>
        <CaretUpDown />
      </Popover.Trigger>
      <Popover.Content autoSize>
        <CommandRoot
          className="rounded-lg border border-gray"
          ref={ref}
          {...rest}
        />
      </Popover.Content>
    </Popover.Root>
  )
})

ComboboxRoot.displayName = 'Combobox.Root'

export default ComboboxRoot
