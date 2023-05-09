import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

export interface SelectItemProps extends RadixSelect.SelectItemProps {}

const SelectItem = forwardRef<HTMLInputElement, SelectItemProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    return (
      <RadixSelect.Item
        ref={forwardedRef}
        className={clsx(
          'data-[state=checked]:text-primary rounded-lg transition-colors px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-primary active:outline-none focus:outline-none focus:bg-gray-300 focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:text-gray overflow-hidden text-ellipsis whitespace-nowrap',
          className
        )}
        {...rest}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    )
  }
)

SelectItem.displayName = 'Select.Item'
export default SelectItem
