import { cn } from '@/src/utils/class-merge.helper'
import * as RadixSelect from '@radix-ui/react-select'
import { CaretDown } from 'phosphor-react'
import { FC } from 'react'

const statusClassVariants = {
  error: 'border-error',
  success: 'border-success',
}

export interface SelectRootProps extends RadixSelect.SelectProps {
  align?: RadixSelect.SelectContentProps['align']
  className?: string
  full?: boolean
  placeholder?: string
  portalContainer?: HTMLElement | null
  position?: RadixSelect.SelectContentProps['position']
  status?: keyof typeof statusClassVariants

  onChange?: (value: string) => void
}

const SelectRoot: FC<SelectRootProps> = ({
  align = 'center',
  children,
  className,
  full,
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
    <RadixSelect.Root value={value} onValueChange={onChange ?? onValueChange} {...rest}>
      <RadixSelect.Trigger
        className={cn(
          'group flex min-h-10 items-center justify-between gap-4 rounded-lg border bg-transparent px-4 py-2 text-sm text-inherit transition-colors',
          'hover:border-gray-700 active:border-primary disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray data-[state=open]:border-primary data-[placeholder]:text-gray [&[data-state=open]>div]:rotate-180 [&[data-state=open]_span:last-child]:rotate-180',
          full ? 'w-full' : 'w-fit',
          status ? statusClassVariants[status] : 'border-gray',
          className,
        )}
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          <RadixSelect.Value placeholder={placeholder} />
        </span>
        <RadixSelect.Icon className={cn('text-inherit transition-all group-data-[state=open]:text-primary')}>
          <CaretDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal container={portalContainer}>
        <RadixSelect.Content
          position={position}
          align={align}
          sideOffset={5}
          collisionPadding={10}
          className="z-100 flex min-w-[220px] !max-w-[calc(100vw-20px)] flex-col gap-2 rounded-lg border border-gray bg-gray-100 shadow"
        >
          <RadixSelect.Viewport className="p-3">
            {placeholder && (
              <RadixSelect.Item value="" className="pointer-events-none px-3 py-2 text-gray" disabled>
                <RadixSelect.ItemText>{placeholder}</RadixSelect.ItemText>
              </RadixSelect.Item>
            )}
            {children}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

SelectRoot.displayName = 'Select.Root'

export default SelectRoot
