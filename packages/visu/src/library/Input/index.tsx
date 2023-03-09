import {
  ButtonHTMLAttributes,
  ComponentProps,
  HTMLAttributes,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'

import * as Component from './style'

// ========================= ROOT =========================

export interface InputRootProps
  extends HTMLAttributes<HTMLDivElement>,
    Omit<ComponentProps<typeof Component.Root>, 'disabled'> {
  disabled?: boolean | 'true' | 'false'
}

const InputRoot = ({
  children,
  disabled,
  ...rest
}: InputRootProps): JSX.Element => {
  const RootComponent = useRef<HTMLDivElement | null>(null)

  const isDisabled = useMemo(() => {
    return typeof disabled === 'boolean' ? disabled : disabled === 'true'
  }, [disabled])

  useEffect(() => {
    if (isDisabled) {
      for (const child of RootComponent.current?.children ?? []) {
        child.setAttribute('disabled', `${isDisabled}`)
      }
    } else {
      for (const child of RootComponent.current?.children ?? []) {
        child.removeAttribute('disabled')
      }
    }
  }, [isDisabled])

  const focusInput = useCallback(() => {
    const InputComponent = RootComponent.current?.querySelector('input')
    InputComponent?.focus()
  }, [RootComponent])

  return (
    <Component.Root
      ref={RootComponent}
      onClick={focusInput}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </Component.Root>
  )
}

InputRoot.displayName = 'Input.Root'

// ========================= INPUT =========================

export interface InputInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ComponentProps<typeof Component.Input> {}

const InputInput = ({ ...rest }: InputInputProps): JSX.Element => {
  return <Component.Input {...rest} />
}

InputInput.displayName = 'Input.Input'

// ========================= ICON =========================

export interface InputIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ComponentProps<typeof Component.Icon>, 'clickable' | 'disabled'> {}

const InputIcon = ({
  children,
  onClick,
  ...rest
}: InputIconProps): JSX.Element => {
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

  return (
    <Component.Icon
      ref={IconComponent}
      clickable={!!onClick}
      onClick={handleClick}
      type="button"
      {...rest}
    >
      {children}
    </Component.Icon>
  )
}

InputIcon.displayName = 'Input.Icon'

// ========================= EXPORTS =========================

const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
}

export default Input
