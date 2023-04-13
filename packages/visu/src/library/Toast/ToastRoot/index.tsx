import * as RadixToast from '@radix-ui/react-toast'
import { clsx } from 'clsx'
import { CheckCircle, Warning, WarningCircle, X } from 'phosphor-react'
import { FC, useMemo } from 'react'

import { closeColorVariants, rootColorVariants } from './style'

export interface ToastRootProps extends RadixToast.ToastProps {
  variant: 'success' | 'error' | 'alert'
  title: string
  desc: string
}

const ToastRoot: FC<ToastRootProps> = ({
  variant,
  title,
  desc,
  children,
  className,
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
        'transition-all gap-4 rounded-lg py-4 px-6 flex justify-between items-center max-w-sm',
        'data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut',
        rootColorVariants[variant],
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
          closeColorVariants[variant]
        )}
      >
        <X />
      </RadixToast.Action>
    </RadixToast.Root>
  )
}

export default ToastRoot
