import { cn } from '@/src/utils/class-merge.helper'

import { CommandItem } from 'cmdk'
import { ComponentPropsWithoutRef } from 'react'

export interface ComboboxItemProps
  extends ComponentPropsWithoutRef<typeof CommandItem> {}

const ComboboxItem = ({ children, className, ...rest }: ComboboxItemProps) => (
  <CommandItem
    className={cn(
      'cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-2 font-light transition-colors hover:bg-gray-300 hover:text-primary focus:bg-gray-300 focus:text-primary focus:outline-none active:outline-none',
      className,
    )}
    {...rest}
  >
    {children}
  </CommandItem>
)

ComboboxItem.displayName = 'Combobox.Item'

export default ComboboxItem
