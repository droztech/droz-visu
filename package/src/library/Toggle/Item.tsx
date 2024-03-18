import { cn } from '@/src/utils/class-merge.helper'

import { Item, ToggleGroupItemProps } from '@radix-ui/react-toggle-group'
import { FC, ReactNode, Ref, forwardRef } from 'react'

export interface ToggleItemProps extends ToggleGroupItemProps {
  icon?: ReactNode
  text?: string
  notification?: boolean
}

const ToggleItem: FC<ToggleItemProps> = forwardRef<
  HTMLButtonElement,
  ToggleItemProps
>(
  (
    { icon, text, notification, className, ...rest },
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <Item
        ref={ref}
        className={cn(
          'group/item flex flex-1 items-center justify-center gap-2 p-2 text-sm first:rounded-l-lg last:rounded-r-lg data-[state="on"]:bg-primary-200 data-[state="on"]:text-primary',
          className,
        )}
        {...rest}
      >
        {icon && (
          <div className="relative">
            {icon}
            {notification && (
              <div className="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full border border-error-300 bg-error-400" />
            )}
          </div>
        )}
        <span className='max-w-full overflow-hidden text-ellipsis whitespace-nowrap group-aria-[expanded="true"]:hidden group-data-[state="on"]/item:!block'>
          {text}
        </span>
      </Item>
    )
  },
)

ToggleItem.displayName = 'Toggle.Root'

export default ToggleItem
