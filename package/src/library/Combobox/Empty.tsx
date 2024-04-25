import { cn } from '@/src/utils/class-merge.helper'

import { CommandEmpty } from 'cmdk'
import { ComponentPropsWithoutRef } from 'react'

export interface ComboboxEmptyProps
  extends ComponentPropsWithoutRef<typeof CommandEmpty> {}

const ComboboxEmpty = ({
  children,
  className,
  ...rest
}: ComboboxEmptyProps) => (
  <CommandEmpty
    className={cn(
      'cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-2 font-light transition-colors hover:bg-gray-300 hover:text-primary focus:bg-gray-300 focus:text-primary focus:outline-none active:outline-none',
      className,
    )}
    {...rest}
  >
    {children}
  </CommandEmpty>
)

ComboboxEmpty.displayName = 'Combobox.Empty'

export default ComboboxEmpty
