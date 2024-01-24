import { Align } from '../types'
import { FC, HTMLAttributes, useMemo } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  align?: Align
}

const alignVariantClass = {
  center: 'justify-center',
  left: 'justify-start',
  right: 'justify-end',
}

const DialogFooter: FC<DialogFooterProps> = ({ align = 'center', children, className, ...rest }) => {
  const variantClass = useMemo(() => {
    const variants = []

    if (align) {
      variants.push(alignVariantClass[align])
    }

    return variants
  }, [align])

  return (
    <div
      className={cn('mt-auto flex flex-row items-center gap-2 border-t border-gray-300 p-4', className, variantClass)}
      {...rest}
    >
      {children}
    </div>
  )
}

DialogFooter.displayName = 'Dialog.Footer'

export default DialogFooter
