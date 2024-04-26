import { cn } from '@/src/utils/class-merge.helper'

import { CommandInput } from 'cmdk'
import { ComponentPropsWithoutRef } from 'react'

export interface ComboboxInputProps
  extends ComponentPropsWithoutRef<typeof CommandInput> {}

const ComboboxInput = ({ className, ...rest }: ComboboxInputProps) => (
  <CommandInput
    className={cn('rounded-t-lg border-b px-6 py-2 outline-none', className)}
    {...rest}
  />
)

ComboboxInput.displayName = 'Combobox.Input'

export default ComboboxInput
