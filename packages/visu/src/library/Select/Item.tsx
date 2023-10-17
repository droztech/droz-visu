import { cn } from '@/src/utils/class-merge.helper'
import * as RadixSelect from '@radix-ui/react-select'
import { forwardRef } from 'react'

export type SelectItemProps = RadixSelect.SelectItemProps

const SelectItem = forwardRef<HTMLInputElement, SelectItemProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    return (
      <RadixSelect.Item
        ref={forwardedRef}
        className={cn(
          'cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-2 transition-colors',
          'hover:bg-gray-300 hover:text-primary focus:bg-gray-300 focus:text-primary focus:outline-none active:outline-none data-[disabled]:pointer-events-none data-[disabled]:text-gray data-[state=checked]:text-primary',
          className,
        )}
        {...rest}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  },
)

SelectItem.displayName = 'Select.Item'

export default SelectItem
