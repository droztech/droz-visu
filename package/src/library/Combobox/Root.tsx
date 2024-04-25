import Popover from '../Popover'

import { cn } from '@/src/utils/class-merge.helper'

import { CommandRoot } from 'cmdk'
import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

export interface CoboboxRootProps
  extends ComponentPropsWithoutRef<typeof CommandRoot> {
  placeholder: string
}

const CoboboxRoot: FC<CoboboxRootProps> = forwardRef<
  ElementRef<typeof CommandRoot>,
  CoboboxRootProps
>(({ className, placeholder, ...rest }, ref) => {
  return (
    <Popover.Root>
      <Popover.Trigger
        className={cn(
          'flex min-h-10 items-center justify-between gap-4 rounded-lg border border-gray bg-transparent px-4 py-2 text-sm text-inherit transition-colors hover:border-gray-700 active:border-primary disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray',
        )}
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          {placeholder}
        </span>
      </Popover.Trigger>

      <Popover.Content>
        <CommandRoot
          className={cn('rounded-lg border border-gray', className)}
          ref={ref}
          {...rest}
        />
      </Popover.Content>
    </Popover.Root>
  )
})

CoboboxRoot.displayName = 'Cobobox.Root'

export default CoboboxRoot
