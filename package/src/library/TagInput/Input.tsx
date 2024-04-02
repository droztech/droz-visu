import { cn } from '@/src/utils/class-merge.helper'

import {
  InputHTMLAttributes,
  KeyboardEvent,
  forwardRef,
  useCallback,
  useState,
} from 'react'

export interface TagInputInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string[]
  onChange?: (ev: string[]) => void
  keys?: string[]
}

const TagInputInput = forwardRef<HTMLInputElement, TagInputInputProps>(
  ({ value, onChange, keys = ['Comma'], className, ...rest }, ref) => {
    const [input, setInput] = useState('')

    const handleKeyUp = useCallback(
      (ev: KeyboardEvent) => {
        if (keys.includes(ev.code)) {
          const newValue = input.slice(0, -1)
          if (value) {
            !value.includes(newValue) && onChange?.([...value, newValue])
          } else {
            onChange?.([newValue])
          }
          setInput('')
        }
      },
      [input, keys, onChange, value],
    )

    return (
      <input
        className={cn(
          'h-10 w-full border-none bg-transparent outline-none placeholder:font-light placeholder:text-gray-400 focus:outline-none disabled:pointer-events-none disabled:text-gray-400',
          className,
        )}
        ref={ref}
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
        onKeyUp={handleKeyUp}
        {...rest}
      />
    )
  },
)

TagInputInput.displayName = 'Input.Input'

export default TagInputInput
