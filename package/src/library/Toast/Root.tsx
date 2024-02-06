import * as RadixToast from '@radix-ui/react-toast'
import { ExtendedStatus, ExtendedStatusClass } from '@types'
import { CheckCircle, Warning, WarningCircle, X } from 'phosphor-react'
import { FC, useMemo } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface ToastRootProps extends RadixToast.ToastProps {
  desc: string
  title: string
  variant: ExtendedStatus
}

export const rootColorClassVariants: ExtendedStatusClass = {
  alert: 'bg-alert-300 w-96 text-alert-700',
  error: 'bg-error-300 w-96 text-error-700',
  success: 'bg-success-300 w-96 text-success-700',
}

export const closeColorClassVariants: ExtendedStatusClass = {
  alert: 'hover:bg-alert-500 active:bg-alert-600',
  error: 'hover:bg-error-500 active:bg-error-600',
  success: 'hover:bg-success-500 active:bg-success-600',
}

const variantIcon = {
  alert: <Warning />,
  error: <WarningCircle />,
  success: <CheckCircle />,
}

const ToastRoot: FC<ToastRootProps> = ({ className, desc, title, variant, ...rest }) => {
  const variantIconElement = useMemo(() => {
    return variantIcon[variant]
  }, [variant])

  return (
    <RadixToast.Root
      className={cn(
        'flex max-w-sm items-center justify-between gap-4 rounded-lg px-6 py-4 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-swipeIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]',
        rootColorClassVariants[variant],
        className,
      )}
      {...rest}
    >
      <div className="flex-1">
        <RadixToast.Title className="flex items-center gap-2 font-semibold">
          {variantIconElement}
          {title}
        </RadixToast.Title>
        <RadixToast.Description className="text-sm">{desc}</RadixToast.Description>
      </div>
      <RadixToast.Action
        altText="close"
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-all hover:text-gray-100',
          closeColorClassVariants[variant],
        )}
      >
        <X />
      </RadixToast.Action>
    </RadixToast.Root>
  )
}

ToastRoot.displayName = 'Toast.Root'

export default ToastRoot