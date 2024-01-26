import { Status } from '@types'
import { FC, HTMLAttributes, useCallback, useEffect, useMemo, useRef } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  full?: boolean
  status?: Status
}

const statusClassVariants = {
  error: 'border-error',
  success: 'border-success',
}

const InputRoot: FC<InputRootProps> = ({ children, className, disabled, full, status, ...rest }) => {
  const RootComponent = useRef<HTMLDivElement | null>(null)

  const fullClass = useMemo(() => {
    return full ? 'w-full' : 'w-fit'
  }, [full])

  const rootClass = useMemo(() => {
    if (disabled) return 'bg-gray-200 cursor-not-allowed border-gray'
    if (status) return statusClassVariants[status]
    return 'border-gray'
  }, [disabled, status])

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
      className={cn(
        className,
        'flex cursor-text items-center gap-3 rounded-lg border border-solid px-4 py-0 focus-within:border-primary focus-within:has-[input:invalid]:!border-error focus-within:has-[input:invalid]:placeholder-shown:outline focus-within:has-[input:invalid]:placeholder-shown:outline-2 focus-within:has-[input:invalid]:placeholder-shown:outline-offset-2 focus-within:has-[input:invalid]:placeholder-shown:outline-gray-900',
        fullClass,
        rootClass,
      )}
      onClick={focusInput}
      {...rest}
    >
      {children}
    </div>
  )
}

InputRoot.displayName = 'Input.Root'

export default InputRoot
