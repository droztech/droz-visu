import { cn } from '@/src/utils/class-merge.helper'

import { InputHTMLAttributes, forwardRef } from 'react'

export interface InputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const InputInput = forwardRef<HTMLInputElement, InputInputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        className={cn(
          'h-10 w-full border-none bg-transparent outline-none placeholder:font-light placeholder:text-gray-400 focus:outline-none disabled:pointer-events-none disabled:text-gray-400',
          className,
        )}
        ref={ref}
        {...rest}
      />
    )
  },
)

InputInput.displayName = 'Input.Input'

export default InputInput
