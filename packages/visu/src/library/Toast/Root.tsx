import * as RadixToast from '@radix-ui/react-toast'
import { ExtendedStatus, ExtendedStatusClass } from '@types'
import { clsx } from 'clsx'
import { CheckCircle, Warning, WarningCircle, X } from 'phosphor-react'
import { FC, useMemo } from 'react'

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

const ToastRoot: FC<ToastRootProps> = ({
  className,
  desc,
  title,
  variant,
  ...rest
}) => {
  const variantIconElement = useMemo(() => {
    switch (variant) {
      case 'success':
        return <CheckCircle />
      case 'error':
        return <WarningCircle />
      case 'alert':
        return <Warning />
    }
  }, [variant])

  return (
    <RadixToast.Root
      className={clsx(
        'transition-all gap-4 rounded-lg py-4 px-6 flex justify-between items-center max-w-sm data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut',
        rootColorClassVariants[variant],
        className
      )}
      {...rest}
    >
      <div className="flex-1">
        <RadixToast.Title className="flex gap-2 items-center font-semibold">
          {variantIconElement}
          {title}
        </RadixToast.Title>
        <RadixToast.Description className="text-sm">
          {desc}
        </RadixToast.Description>
      </div>
      <RadixToast.Action
        altText="close"
        className={clsx(
          'bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full hover:text-gray-100 transition-all',
          closeColorClassVariants[variant]
        )}
      >
        <X />
      </RadixToast.Action>
    </RadixToast.Root>
  )
}

ToastRoot.displayName = 'Toast.Root'

export default ToastRoot
