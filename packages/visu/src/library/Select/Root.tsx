import * as RadixSelect from '@radix-ui/react-select'
import { clsx } from 'clsx'
import { CaretDown } from 'phosphor-react'
import { FC } from 'react'

export interface SelectRootProps extends RadixSelect.SelectProps {
  placeholder?: string
  className?: string
  position?: RadixSelect.SelectContentProps['position']
  align?: RadixSelect.SelectContentProps['align']
  full?: boolean
}

const SelectRoot: FC<SelectRootProps> = ({
  children,
  className,
  placeholder,
  position = 'popper',
  align = 'center',
  full,
  value,
  ...rest
}) => {
  return (
    <RadixSelect.Root value={value} {...rest}>
      <RadixSelect.Trigger
        className={clsx(
          '[&[data-state=open]_span:last-child]:rotate-180 disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray border px-4 py-2 rounded-lg bg-transparent border-gray flex items-center gap-4 justify-between min-h-10 text-sm [&[data-state=open]>div]:rotate-180 hover:border-gray-700 transition-colors active:border-primary data-[state=open]:border-primary',
          !value && 'text-gray',
          full ? 'w-full' : 'w-fit',
          className
        )}
      >
        <span className="whitespace-nowrap text-ellipsis overflow-hidden">
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
          className="flex flex-col rounded-lg gap-2 border border-gray shadow bg-gray-100 !max-w-[calc(100vw-20px)] min-w-[220px]"
        >
          <RadixSelect.Viewport className="p-3">
            {placeholder && (
              <RadixSelect.Item
                value=""
                className="px-3 py-2 text-gray pointer-events-none"
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
