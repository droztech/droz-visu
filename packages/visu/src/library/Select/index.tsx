import { clsx } from 'clsx'
import { CaretDown } from 'phosphor-react'
import { FC, HTMLAttributes, useMemo, useState } from 'react'

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: {
    value: string
    label: string
  }[]
  value?: string
  onChange?: (data: string) => void
}

const Select: FC<SelectProps> = ({
  options,
  onChange,
  value,
  className,
  placeholder,
  ...rest
}) => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (ev: string) => {
    setExpanded(false)
    if (onChange) onChange(ev)
  }

  const currentValue = useMemo(() => {
    return (
      options.find((item) => item.value === value)?.label || placeholder || ''
    )
  }, [value])

  return (
    <div className="flex flex-col gap-1 relative" {...rest}>
      <div
        className={clsx(
          'border px-4 py-2 rounded-lg bg-transparent border-gray flex items-center gap-4 justify-between select-none cursor-pointer w-72 min-h-10 text-sm',
          value === '' && 'text-gray',
          className
        )}
        onClick={() => setExpanded(!expanded)}
      >
        <span>{currentValue}</span>
        <span
          className={clsx(
            'text-primary transition-all',
            expanded && 'rotate-180'
          )}
        >
          <CaretDown />
        </span>
      </div>
      <ul
        className={clsx(
          'flex-col p-3 rounded-lg gap-2 border border-gray shadow absolute bg-gray-100 top-12 w-full [&>li]:text-sm',
          expanded ? 'flex' : 'hidden'
        )}
      >
        {placeholder && (
          <li className="pointer-events-none text-gray px-3 py-2">
            {placeholder}
          </li>
        )}
        {options.map((item, index) => (
          <li
            className="rounded-lg transition-colors px-3 py-2 hover:bg-gray-300 hover:text-primary cursor-pointer"
            key={index}
            onClick={() => handleChange(item.value)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
