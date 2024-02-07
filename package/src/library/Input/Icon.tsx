import { cn } from '@/src/utils/class-merge.helper'

import { ButtonHTMLAttributes, FC, useCallback, useMemo, useRef } from 'react'

export interface InputIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const InputIcon: FC<InputIconProps> = ({
  children,
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

  const clickableClass = useMemo(() => {
    return (onClick || type) && 'hover:text-primary hover:cursor-pointer'
  }, [onClick, type])

  return (
    <button
      ref={IconComponent}
      className={cn(
        'flex h-6 w-6 cursor-text items-center justify-center border-none bg-transparent p-0 text-gray-500 outline-none transition-all focus:outline-none disabled:pointer-events-none disabled:text-gray-400 [&_svg]:h-full [&_svg]:w-full',
        clickableClass,
        className,
      )}
      onClick={handleClick}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}

InputIcon.displayName = 'Input.Icon'

export default InputIcon
