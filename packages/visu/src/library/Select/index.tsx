import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { CaretDown } from 'phosphor-react'
import { FC, useMemo } from 'react'

export interface SelectProps
  extends Omit<RadixDropdown.MenuContentProps, 'onChange'> {
  options: {
    value: string
    label: string
    disabled?: boolean
  }[]
  value?: string
  onChange?: (data: string) => void
  disabled?: boolean
}

const Select: FC<SelectProps> = ({
  options,
  disabled,
  onChange,
  value,
  className,
  sideOffset = 5,
  placeholder,
  ...rest
}) => {
  const handleChange = (ev: string) => {
    if (onChange) onChange(ev)
  }

  const currentValue = useMemo(() => {
    return (
      options.find((item) => item.value === value)?.label || placeholder || ''
    )
  }, [value])

  return (
    <RadixDropdown.Root>
      <RadixDropdown.Trigger
        className={clsx(
          'disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray border px-4 py-2 rounded-lg bg-transparent border-gray flex items-center gap-4 justify-between w-72 min-h-10 text-sm [&[data-state=open]>div]:rotate-180 hover:border-gray-700 transition-colors active:border-primary data-[state=open]:border-primary',
          !value && 'text-gray',
          className
        )}
        disabled={disabled}
      >
        <span>{currentValue}</span>
        <div className="text-primary transition-all">
          <CaretDown />
        </div>
      </RadixDropdown.Trigger>
      <RadixDropdown.Portal>
        <RadixDropdown.Content
          sideOffset={sideOffset}
          className="flex flex-col p-3 rounded-lg gap-2 border border-gray shadow bg-gray-100 top-12 w-72 [&>li]:text-sm"
          {...rest}
        >
          {placeholder && (
            <span className="pointer-events-none text-gray px-3 py-2">
              {placeholder}
            </span>
          )}
          {options.map((item, index) => (
            <RadixDropdown.Item
              className="rounded-lg transition-colors px-3 py-2 hover:bg-gray-300 hover:text-primary cursor-pointer active:outline-none focus:outline-none focus:bg-gray-300 focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:text-gray"
              key={index}
              onSelect={() => handleChange(item.value)}
              disabled={item.disabled}
            >
              {item.label}
            </RadixDropdown.Item>
          ))}
        </RadixDropdown.Content>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  )
}

export default Select
