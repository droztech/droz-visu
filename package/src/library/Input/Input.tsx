import { clsx } from 'clsx'
import { InputHTMLAttributes, Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputInput = forwardRef<HTMLInputElement, InputInputProps>(
  ({ className, ...rest }, ref: Ref<HTMLInputElement | null>) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => inputRef.current)

    return (
      <input
        className={clsx([
          className,
          'bg-transparent',
          'outline-none',
          'focus:outline-none',
          'h-10',
          'w-full',
          'border-none',
          'placeholder:text-gray-400',
          'disabled:text-gray-400',
          'disabled:pointer-events-none',
        ])}
        ref={inputRef}
        {...rest}
      />
    )
  },
)

InputInput.displayName = 'Input.Input'

export default InputInput
