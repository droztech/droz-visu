import { cn } from '@/src/utils/class-merge.helper'

import {
  InputHTMLAttributes,
  Ref,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'

export interface InputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const InputInput = forwardRef<HTMLInputElement, InputInputProps>(
  ({ className, ...rest }, ref: Ref<HTMLInputElement | null>) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => inputRef.current)

    return (
      <input
        className={cn(
          'h-10 w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none disabled:pointer-events-none disabled:text-gray-400',
          className,
        )}
        ref={inputRef}
        {...rest}
      />
    )
  },
)

InputInput.displayName = 'Input.Input'

export default InputInput
