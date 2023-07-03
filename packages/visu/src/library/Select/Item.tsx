import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type SelectItemProps = RadixSelect.SelectItemProps

const SelectItem = forwardRef<HTMLInputElement, SelectItemProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    return (
      <RadixSelect.Item
        ref={forwardedRef}
        className={clsx(
          'data-[state=checked]:text-primary hover:text-primary focus:text-primary data-[disabled]:text-gray cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg px-3 py-2 transition-colors hover:bg-gray-300 focus:bg-gray-300 focus:outline-none active:outline-none data-[disabled]:pointer-events-none',
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
