import { cn } from '@/src/utils/class-merge.helper'

import { ButtonHTMLAttributes, FC, ReactNode, useCallback, useRef } from 'react'

export interface InputIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

const InputIcon: FC<InputIconProps> = ({
  icon,
  className,
  onClick,
  type,
  ...rest
}) => {
  const IconComponent = useRef<HTMLButtonElement | null>(null)

  const focusInput = useCallback(() => {
    const RootComponent = IconComponent?.current?.parentElement
    const InputComponent = RootComponent?.querySelector('input')
    InputComponent?.focus()
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      focusInput()
      onClick?.(e)
    },
    [onClick, focusInput],
  )

  return (
    <button
      ref={IconComponent}
      className={cn(
        'flex h-6 w-6 cursor-text items-center justify-center border-none bg-transparent p-0 text-gray-500 outline-none transition-all focus:outline-none disabled:pointer-events-none disabled:text-gray-400 [&_svg]:h-full [&_svg]:w-full',
        (onClick || type) && 'hover:cursor-pointer hover:text-primary',
        className,
      )}
      onClick={handleClick}
      type="button"
      {...rest}
    >
      {icon}
    </button>
  )
}

InputIcon.displayName = 'Input.Icon'

export default InputIcon
