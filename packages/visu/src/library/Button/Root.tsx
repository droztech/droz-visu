import { Slot } from '@radix-ui/react-slot'
import { ButtonVariant, ButtonVariantClass, Size, SizeClass } from '@types'
import { clsx } from 'clsx'
import {
  ButtonHTMLAttributes,
  Ref,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react'

import LoadingDots from '../Loading'

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  full?: boolean
  ghost?: boolean
  light?: boolean
  loading?: boolean
  size?: Size
  variant?: ButtonVariant
}

const sizeClassVariants: SizeClass = {
  sm: 'py-2.5 px-6 text-sm min-h-10',
  md: 'py-3 px-10 min-h-12',
  lg: 'py-9 px-12 text-lg min-h-28 [&_div]:h-10 [&_div]:w-10',
}

const variantClassVariants: ButtonVariantClass = {
  neutral:
    'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 active:bg-gray-300',
  primary:
    'bg-primary text-gray-100 hover:bg-primary-500 active:bg-primary-600',
  secondary:
    'bg-secondary text-gray-100 hover:bg-secondary-500 active:bg-secondary-600',
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

    // Variants

    const disabledClass = useMemo<string>(() => {
      return disabled || loading
        ? clsx({
            'pointer-events-none': disabled || loading,
            '!bg-gray !text-gray-500':
              (disabled || loading) && !ghost && !light,
            '!border-gray !text-gray-500 !bg-transparent':
              (disabled || loading) && ghost,
            'text-gray bg-transparent': (disabled || loading) && light,
          })
        : ''
    }, [disabled, loading, ghost, light, variant])

    const fullClass = useMemo<string>(() => {
      return full ? '!w-full' : 'w-fit'
    }, [full])

    const loadingClass = useMemo<string>(() => {
      return loading ? 'opacity-0' : ''
    }, [loading])

    const ghostClass = useMemo<string>(() => {
      return ghost ? '!border !border-solid bg-transparent' : ''
    }, [ghost])

    const lightClass = useMemo<string>(() => {
      return light ? 'border-none !bg-transparent !p-3' : ''
    }, [light])

    const sizeClass = useMemo<string>(() => {
      return sizeClassVariants[size]
    }, [size])

    const variantClass = useMemo<string>(() => {
      return variantClassVariants[variant]
    }, [variant])

    // Compound Variants

    const compoundVariantsClass = useMemo<string>(() => {
      const ghostAndVariantClass = clsx({
        'border-primary text-primary hover:!border-primary-500 hover:!text-primary-500 hover:!bg-primary-100 active:!border-primary-600 active:!text-primary-600 active:!bg-primary-100':
          ghost && variant === 'primary',
        'border-secondary text-secondary hover:!border-secondary-500 hover:!text-secondary-500 hover:!bg-secondary-100 active:!border-secondary-600 active:!text-secondary-600 active:!bg-secondary-100':
          ghost && variant === 'secondary',
      })

      const lightAndVariantClass = clsx({
        'text-primary hover:text-primary-500 !hover:bg-transparent active:text-primary-600 !active:bg-transparent':
          light && variant === 'primary',
        'text-secondary hover:text-secondary-500 !hover:bg-transparent active:text-secondary-600 !active:bg-transparent':
          light && variant === 'secondary',
      })

      return clsx(ghostAndVariantClass, lightAndVariantClass)
    }, [ghost, light, variant])

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
          'border-none',
          'cursor-pointer',
          'transition-all',
          compoundVariantsClass,
          fullClass,
          ghostClass,
          lightClass,
          sizeClass,
          variantClass,
          disabledClass,
        ])}
        disabled={disabled || loading}
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
