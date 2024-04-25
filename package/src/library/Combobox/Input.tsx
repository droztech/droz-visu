import { cn } from '@/src/utils/class-merge.helper'

import { CommandInput } from 'cmdk'
import { ComponentPropsWithoutRef } from 'react'

export interface ComboboxInputProps
  extends ComponentPropsWithoutRef<typeof CommandInput> {}

const ComboboxInput = ({ className, ...rest }: ComboboxInputProps) => (
  <CommandInput
    className={cn(
      'flex min-h-10 items-center gap-4 border-b border-gray bg-transparent px-4 py-2 text-sm text-inherit transition-colors hover:border-gray-700 hover:outline-none focus:outline-none active:border-primary active:outline-none disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray',
      className,
    )}
    {...rest}
  />
)

ComboboxInput.displayName = 'Combobox.Input'

export default ComboboxInput
