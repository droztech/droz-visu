import { Slot } from '@radix-ui/react-slot'
import { ButtonVariant, ButtonVariantClass } from '@types'
import { clsx } from 'clsx'
import {
  ButtonHTMLAttributes,
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'

import LoadingDots from '../Loading'

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  full?: boolean
  ghost?: boolean
  light?: boolean
  loading?: boolean
  size?: keyof typeof sizeClassVariants
  variant?: ButtonVariant
}

const ghostClassVariants: ButtonVariantClass = {
  neutral: 'border border-solid bg-transparent border-gray-600 text-gray-900',
  primary: 'border border-solid bg-transparent border-primary text-primary',
  secondary:
    'border border-solid bg-transparent border-secondary text-secondary',
}

const lightClassVariants: ButtonVariantClass = {
  neutral: 'bg-transparent text-gray-900',
  primary: 'bg-transparent text-primary',
  secondary: 'bg-transparent text-secondary',
}

const sizeClassVariants = {
  xs: 'p-2 text-sm',
  sm: 'py-2.5 px-6 text-sm min-h-10',
  md: 'py-3 px-10 min-h-12',
  lg: 'py-9 px-12 text-lg min-h-28 [&_div]:h-10 [&_div]:w-10',
}

const variantClassVariants: ButtonVariantClass = {
  neutral:
    'bg-gray-100 border-none text-gray-900 shadow-sm hover:bg-gray-200 active:bg-gray-300',
  primary:
    'bg-primary border-none text-gray-100 hover:bg-primary-500 active:bg-primary-600',
  secondary:
    'bg-secondary border-none text-gray-100 hover:bg-secondary-500 active:bg-secondary-600',
}

const ButtonRoot = forwardRef<HTMLButtonElement, ButtonRootProps>(
  (
    {
      asChild,
      children,
      className,
      disabled,
      full,
      ghost,
      light,
      loading,
      size = 'md',
      variant = 'primary',
      ...rest
    },
    ref: Ref<HTMLButtonElement | null>
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const RootComponent = asChild && !loading ? Slot : 'button'

    useImperativeHandle(ref, () => buttonRef.current)

    const [isDisabled, setIsDisabled] = useState<boolean | undefined>(disabled)

    // Variants

    useEffect(() => {
      setIsDisabled(disabled || loading)
    }, [disabled, loading])

    const rootClass = useMemo(() => {
      if (isDisabled) {
        if (ghost)
          return 'pointer-events-none border-gray text-gray-500 bg-transparent'
        if (light) return 'pointer-events-none text-gray bg-transparent'
        return 'pointer-events-none bg-gray text-gray-500'
      }
      if (light) return lightClassVariants[variant]
      if (ghost) return ghostClassVariants[variant]
      return variantClassVariants[variant]
    }, [ghost, isDisabled, light, variant])

    const fullClass = useMemo<string>(() => {
      return full ? '!w-full' : 'w-fit'
    }, [full])

    const loadingClass = useMemo<string>(() => {
      return loading ? 'opacity-0' : ''
    }, [loading])

    const sizeClass = useMemo<string>(() => {
      return sizeClassVariants[size]
    }, [size])

    return (
      <RootComponent
        className={clsx([
          className,
          'flex',
          'flex-row',
          'gap-2.5',
          'items-center',
          'justify-center',
          'relative',
          'rounded-lg',
          'cursor-pointer',
          'transition-all',
          fullClass,
          rootClass,
          sizeClass,
        ])}
        disabled={isDisabled}
        ref={buttonRef}
        {...rest}
      >
        {!loading ? (
          children
        ) : (
          <>
            <span
              className={clsx([
                'flex',
                'flex-row',
                'gap-2.5',
                'items-center',
                'justify-center',
                loadingClass,
              ])}
            >
              {children}
            </span>
            {loading && <LoadingDots className="absolute" />}
          </>
        )}
      </RootComponent>
    )
  }
)

ButtonRoot.displayName = 'Button.Root'

export default ButtonRoot
