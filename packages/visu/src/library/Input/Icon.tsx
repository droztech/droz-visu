import clsx from 'clsx'
import { ButtonHTMLAttributes, useCallback, useMemo, useRef } from 'react'

export interface InputIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const InputIcon = ({ children, onClick, ...rest }: InputIconProps) => {
  const IconComponent = useRef<HTMLButtonElement | null>(null)

  const focusInput = useCallback(() => {
    const RootComponent = IconComponent?.current?.parentElement
    const InputComponent = RootComponent?.querySelector('input')
    InputComponent?.focus()
  }, [IconComponent.current])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      focusInput()
      onClick?.(e)
    },
    [onClick, focusInput]
  )

  const clickableClass = useMemo(() => {
    return onClick ? 'hover:text-primary hover:cursor-pointer' : ''
  }, [onClick])

  return (
    <button
      ref={IconComponent}
      className={clsx([
        'flex',
        'justify-center',
        'items-center',
        'bg-transparent',
        'text-gray-500',
        'outline-none',
        'focus:outline-none',
        'cursor-text',
        'p-0',
        'h-6',
        'w-6',
        'border-anone',
        'transition-all',
        '[&_svg]:h-full',
        '[&_svg]:w-full',
        'disabled:text-gray-400',
        'disabled:pointer-events-none',
        clickableClass,
      ])}
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
