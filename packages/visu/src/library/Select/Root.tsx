import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'
import { CaretDown } from 'phosphor-react'
import { FC } from 'react'

const statusClassVariants = {
  error: 'border-error',
  success: 'border-success',
}

export interface SelectRootProps extends RadixSelect.SelectProps {
  placeholder?: string
  className?: string
  onChange?: (value: string) => void
  position?: RadixSelect.SelectContentProps['position']
  align?: RadixSelect.SelectContentProps['align']
  full?: boolean
  status?: keyof typeof statusClassVariants
}

const SelectRoot: FC<SelectRootProps> = ({
  children,
  className,
  placeholder,
  position = 'popper',
  align = 'center',
  status,
  full,
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
        className={clsx(
          'disabled:text-gray min-h-10 active:border-primary data-[state=open]:border-primary flex items-center justify-between gap-4 rounded-lg border bg-transparent px-4 py-2 text-sm text-gray-900 transition-colors hover:border-gray-700 disabled:pointer-events-none disabled:bg-gray-200 [&[data-state=open]>div]:rotate-180 [&[data-state=open]_span:last-child]:rotate-180',
          !value && 'text-gray',
          full ? 'w-full' : 'w-fit',
          status ? statusClassVariants[status] : 'border-gray',
          className,
        )}
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">
          <RadixSelect.Value
            placeholder={<span className="text-gray">{placeholder}</span>}
          />
        </span>
        <RadixSelect.Icon className="text-primary transition-all">
          <CaretDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position={position}
          align={align}
          sideOffset={5}
          collisionPadding={10}
          className="border-gray flex min-w-[220px] !max-w-[calc(100vw-20px)] flex-col gap-2 rounded-lg border bg-gray-100 shadow"
        >
          <RadixSelect.Viewport className="p-3">
            {placeholder && (
              <RadixSelect.Item
                value=""
                className="text-gray pointer-events-none px-3 py-2"
                disabled
              >
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
