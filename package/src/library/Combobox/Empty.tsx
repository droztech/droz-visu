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
  <CommandEmpty className={cn('ellipsis', className)} {...rest}>
    {children}
  </CommandEmpty>
)

ComboboxEmpty.displayName = 'Combobox.Empty'

export default ComboboxEmpty
