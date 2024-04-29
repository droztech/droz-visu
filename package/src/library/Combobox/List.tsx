import { cn } from '@/src/utils/class-merge.helper'

import { CommandList } from 'cmdk'
import { ComponentPropsWithoutRef } from 'react'

export interface ComboboxListProps
  extends ComponentPropsWithoutRef<typeof CommandList> {}

const ComboboxList = ({ children, className, ...rest }: ComboboxListProps) => {
  return (
    <CommandList
      className={cn(
        'z-100 flex flex-col gap-2 rounded-lg bg-gray-100 p-4',
        className,
      )}
      {...rest}
    >
      {children}
    </CommandList>
  )
}

ComboboxList.displayName = 'Combobox.List'

export default ComboboxList
