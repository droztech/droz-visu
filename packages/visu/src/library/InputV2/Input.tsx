import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

export interface InputInputV2Props
  extends InputHTMLAttributes<HTMLInputElement> {}

const InputInputV2 = ({ ...rest }: InputInputV2Props) => {
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

InputInputV2.displayName = 'Input.Input'

export default InputInputV2
