import { cn } from '@/src/utils/class-merge.helper'
import { Status, StatusClass } from '@types'

import {
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'

const statusVariants: StatusClass = {
  error: { root: 'border-error' },
  success: { root: 'border-success pt' },
  alert: { root: 'border-alert' },
}

export interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  status?: Status
  borderless?: boolean
}

const InputRoot: FC<InputRootProps> = ({
  children,
  className,
  disabled,
  status,
  borderless,
  ...rest
}) => {
  const RootComponent = useRef<HTMLDivElement | null>(null)

  const rootClass = useMemo(() => {
    if (disabled) return 'bg-gray-200 cursor-not-allowed border-gray'
    if (status) return statusVariants[status].root
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
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      ref={RootComponent}
      className={cn(
        'flex cursor-text gap-3 rounded-lg border border-solid px-4 py-0 focus-within:border-primary focus-within:has-[input:invalid]:!border-error focus-within:has-[input:invalid]:placeholder-shown:outline focus-within:has-[input:invalid]:placeholder-shown:outline-2 focus-within:has-[input:invalid]:placeholder-shown:outline-offset-2 focus-within:has-[input:invalid]:placeholder-shown:outline-gray-900',
        borderless && 'border-none outline-none',
        rootClass,
        className,
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
