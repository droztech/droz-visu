import { cn } from '@/src/utils/class-merge.helper'
import { Status, StatusClass } from '@types'

import * as RadixSelect from '@radix-ui/react-select'
import { CaretDown, CaretUp } from 'phosphor-react'
import { FC } from 'react'

const statusVariants: StatusClass = {
  error: { root: 'border-error' },
  success: { root: 'border-success' },
  alert: { root: 'border-alert' },
}

export interface SelectRootProps extends RadixSelect.SelectProps {
  align?: RadixSelect.SelectContentProps['align']
  className?: string
  placeholder?: string
  portalContainer?: HTMLElement | null
  position?: RadixSelect.SelectContentProps['position']
  status?: Status
  onChange?: (value: string) => void
}

const SelectRoot: FC<SelectRootProps> = ({
  align = 'center',
  children,
  className,
  placeholder,
  portalContainer,
  position = 'popper',
  status,
  value,
  onChange,
  onValueChange,
  ...rest
}) => {
  return (
    <RadixSelect.Root
      value={value}
      onValueChange={onChange ?? onValueChange}
      {...rest}
    >
      <RadixSelect.Trigger
        className={cn(
          'group flex min-h-10 items-center justify-between gap-4 rounded-lg border bg-transparent px-4 py-2 text-sm text-inherit transition-colors hover:border-gray-700 active:border-primary disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray data-[state=open]:border-primary data-[placeholder]:text-gray [&[data-state=open]>div]:rotate-180 [&[data-state=open]_span:last-child]:rotate-180',
          status ? statusVariants[status].root : 'border-gray',
          className,
        )}
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          <RadixSelect.Value placeholder={placeholder} />
        </span>
        <RadixSelect.Icon
          className={cn(
            'text-inherit transition-all group-data-[state=open]:text-primary',
          )}
        >
          <CaretDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal container={portalContainer}>
        <RadixSelect.Content
          position={position}
          align={align}
          sideOffset={5}
          collisionPadding={32}
          avoidCollisions
          className="z-100 flex max-h-[--radix-select-content-available-height] min-w-56 max-w-[--radix-select-content-available-width] flex-col gap-2 rounded-lg border border-gray bg-gray-100 shadow"
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center p-2">
            <CaretUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="p-4">
            {placeholder && (
              <RadixSelect.Item
                value="placeholder"
                className="pointer-events-none px-3 py-2 text-gray"
                disabled
              >
                <RadixSelect.ItemText>{placeholder}</RadixSelect.ItemText>
              </RadixSelect.Item>
            )}
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex items-center justify-center p-2">
            <CaretDown />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

SelectRoot.displayName = 'Select.Root'

export default SelectRoot
