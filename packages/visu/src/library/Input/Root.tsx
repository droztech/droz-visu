import { clsx } from 'clsx'
import { HTMLAttributes, useCallback, useEffect, useMemo, useRef } from 'react'

export interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  full?: boolean
  status?: 'success' | 'error'
}

const InputRoot = ({
  children,
  disabled,
  full,
  status,
  ...rest
}: InputRootProps) => {
  const RootComponent = useRef<HTMLDivElement | null>(null)

  const disabledClass = useMemo(() => {
    return disabled ? 'bg-gray-200 cursor-not-allowed !border-gray-400' : ''
  }, [disabled])

  const fullClass = useMemo(() => {
    return full ? 'w-full' : 'w-fit'
  }, [full])

  const statusClass = useMemo(() => {
    return status
      ? clsx({
          'border-error': status === 'error',
          'border-success': status === 'success',
        })
      : 'border-gray-500'
  }, [status])

  useEffect(() => {
    if (disabled) {
      for (const child of RootComponent.current?.children ?? []) {
        child.setAttribute('disabled', `${disabled}`)
      }
    } else {
      for (const child of RootComponent.current?.children ?? []) {
        child.removeAttribute('disabled')
      }
    }
  }, [disabled])

  const focusInput = useCallback(() => {
    const InputComponent = RootComponent.current?.querySelector('input')
    InputComponent?.focus()
  }, [RootComponent])

  return (
    <div
      ref={RootComponent}
      className={clsx([
        'flex',
        'items-center',
        'gap-3',
        'py-0',
        'px-4',
        'text-gray-500',
        'rounded-lg',
        'cursor-text',
        'border',
        'border-solid',
        'focus-within:border-primary',
        'focus-within:has-[input:invalid]:!border-error',
        'focus-within:has-[input:invalid]:placeholder-shown:outline',
        'focus-within:has-[input:invalid]:placeholder-shown:outline-2',
        'focus-within:has-[input:invalid]:placeholder-shown:outline-gray-900',
        'focus-within:has-[input:invalid]:placeholder-shown:outline-offset-2',
        disabledClass,
        fullClass,
        statusClass,
      ])}
      onClick={focusInput}
      {...rest}
    >
      {children}
    </div>
  )
}

InputRoot.displayName = 'Input.Root'

export default InputRoot
