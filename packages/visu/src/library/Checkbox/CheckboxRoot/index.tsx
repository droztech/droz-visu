import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface CheckboxRootProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const CheckboxRoot: FC<CheckboxRootProps> = ({
  asChild,
  children,
  className,
  ...rest
}) => {
  const RootComponent = asChild ? Slot : 'div'

  return (
    <RootComponent
      className={clsx('flex gap-2 items-center', className)}
      {...rest}
    >
      {children}
    </RootComponent>
  )
}

export default CheckboxRoot
