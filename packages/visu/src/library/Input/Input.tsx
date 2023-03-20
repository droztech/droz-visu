import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

export interface InputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const InputInput = ({ ...rest }: InputInputProps) => {
  return (
    <input
      className={clsx([
        'bg-transparent',
        'text-gray-900',
        'outline-none',
        'focus:outline-none',
        'h-10',
        'w-full',
        'border-none',
        'placeholder:text-gray-400',
        'disabled:text-gray-400',
        'disabled:pointer-events-none',
      ])}
      {...rest}
    />
  )
}

InputInput.displayName = 'Input.Input'

export default InputInput
