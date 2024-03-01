import { Status } from '../types'

import { cn } from '@/src/utils/class-merge.helper'

import * as RadixToast from '@radix-ui/react-toast'
import { CheckCircle, Warning, WarningCircle, X } from 'phosphor-react'
import { FC } from 'react'

export const colorVariants = {
  alert: {
    root: 'bg-alert-300 w-96 text-alert-700',
    close: 'hover:bg-alert-500 active:bg-alert-600',
  },
  error: {
    root: 'bg-error-300 w-96 text-error-700',
    close: 'hover:bg-error-500 active:bg-error-600',
  },
  success: {
    root: 'bg-success-300 w-96 text-success-700',
    close: 'hover:bg-success-500 active:bg-success-600',
  },
}

export interface ToastRootProps extends RadixToast.ToastProps {
  desc: string
  title: string
  variant: Status
}

const variantIcon = {
  alert: <Warning />,
  error: <WarningCircle />,
  success: <CheckCircle />,
}

const ToastRoot: FC<ToastRootProps> = ({
  className,
  desc,
  title,
  variant,
  ...rest
}) => {
  return (
    <RadixToast.Root
      className={cn(
        'flex max-w-sm items-center justify-between gap-4 rounded-lg px-6 py-4 transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-swipeIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]',
        colorVariants[variant].root,
        className,
      )}
      {...rest}
    >
      <div className="flex-1">
        <RadixToast.Title className="flex items-center gap-2 font-semibold">
          {variantIcon[variant]}
          {title}
        </RadixToast.Title>
        <RadixToast.Description className="text-sm">
          {desc}
        </RadixToast.Description>
      </div>
      <RadixToast.Action
        altText="close"
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-all hover:text-gray-100',
          colorVariants[variant].close,
        )}
      >
        <X />
      </RadixToast.Action>
    </RadixToast.Root>
  )
}

ToastRoot.displayName = 'Toast.Root'

export default ToastRoot
