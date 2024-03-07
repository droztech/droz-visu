import { cn } from '@/src/utils/class-merge.helper'

import { X } from '@phosphor-icons/react'
import {
  InputHTMLAttributes,
  KeyboardEvent,
  forwardRef,
  useCallback,
  useState,
} from 'react'

export interface InputTagsProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string[]
  onChange?: (ev: string[]) => void
}

const InputTags = forwardRef<HTMLInputElement, InputTagsProps>(
  ({ value, onChange, className, ...rest }, ref) => {
    const [input, setInput] = useState('')

    const handleKeyUp = useCallback(
      (ev: KeyboardEvent) => {
        if (ev.code === 'Comma') {
          const newValue = input.slice(0, -1)
          if (value) {
            !value.includes(newValue) && onChange?.([...value, newValue])
          } else {
            onChange?.([newValue])
          }
          setInput('')
        }
      },
      [input, onChange, value],
    )

    const handleRemoveTag = useCallback(
      (tag: string) => {
        const newValue = value?.filter((item) => item !== tag)
        newValue && onChange?.(newValue)
      },
      [onChange, value],
    )

    return (
      <div
        className="flex max-w-[calc(100%-2.25rem)] flex-1 flex-wrap items-center gap-2 data-[tags=true]:my-2"
        data-tags={value && value.length > 0}
      >
        {value &&
          value.length > 0 &&
          value.map((item) => (
            <div
              className="flex max-w-full items-center gap-1 rounded-3xl bg-primary-200 px-4 py-1"
              key={item}
            >
              <span className="ellipsis text-xs">{item}</span>
              <button
                className="rounded-full p-0.5 transition-all hover:backdrop-brightness-150"
                onClick={() => handleRemoveTag(item)}
              >
                <X size={10} />
              </button>
            </div>
          ))}
        <input
          className={cn(
            'h-10 border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none disabled:pointer-events-none disabled:text-gray-400',
            className,
          )}
          ref={ref}
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
          onKeyUp={handleKeyUp}
          {...rest}
        />
      </div>
    )
  },
)

InputTags.displayName = 'Input.Input'

export default InputTags
