import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, useMemo } from 'react'

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  full?: boolean
  ghost?: boolean
  light?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'neutral' | 'primary' | 'secondary'
}

const ButtonRoot = ({
  asChild,
  children,
  className,
  disabled,
  full,
  ghost,
  light,
  size = 'md',
  variant = 'primary',
  ...rest
}: ButtonRootProps) => {
  const RootComponent = asChild ? Slot : 'button'

  // Variants

  const disabledClass = useMemo(() => {
    return disabled
      ? clsx({
          'pointer-events-none': disabled,
          '!bg-gray !text-gray-500': disabled && !ghost && !light,
          'border-gray text-gray bg-transparent': disabled && ghost,
          'text-gray bg-transparent': disabled && light,
        })
      : ''
  }, [disabled, ghost, light, variant])

  const fullClass = useMemo(() => {
    return full ? '!w-full' : 'w-fit'
  }, [])

  const ghostClass = useMemo(() => {
    return ghost ? '!border !border-solid bg-transparent' : ''
  }, [])

  const lightClass = useMemo(() => {
    return light ? 'border-none !bg-transparent !p-3' : ''
  }, [light])

  const sizeClass = useMemo(() => {
    return clsx({
      'py-2.5 px-6 text-sm min-h-10': size === 'sm',
      'py-3 px-10 min-h-12': size === 'md',
      'py-9 px-12 text-lg min-h-28 [&_div]:h-10 [&_div]:w-10': size === 'lg',
    })
  }, [size])

  const variantClass = useMemo(() => {
    return clsx({
      'bg-gray-100 text-gray-900 shadow-neutral hover:bg-gray-200 active:bg-gray-300':
        variant === 'neutral',
      'bg-primary text-gray-100 hover:bg-primary-500 active:bg-primary-600':
        variant === 'primary',
      'bg-secondary text-gray-100 hover:bg-secondary-500 active:bg-secondary-600':
        variant === 'secondary',
    })
  }, [variant])

  // Compound Variants

  const compoundVariantsClass = useMemo(() => {
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
        'gap-2.5',
        'items-center',
        'justify-center',
        'rounded-lg',
        'border-none',
        'cursor-pointer',
        'transition-all',
        compoundVariantsClass,
        disabledClass,
        fullClass,
        ghostClass,
        lightClass,
        sizeClass,
        variantClass,
      ])}
      disabled={disabled}
      {...rest}
    >
      {children}
    </RootComponent>
  )
}

ButtonRoot.displayName = 'Button.Root'

export default ButtonRoot
