import { cn } from '@/src/utils/class-merge.helper'
import { Align, AlignClass } from '@types'

import { FC, HTMLAttributes } from 'react'

const alignVariant: AlignClass = {
  center: { root: 'justify-center' },
  left: { root: 'justify-start' },
  right: { root: 'justify-end' },
}

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  align?: Align
}

const DialogFooter: FC<DialogFooterProps> = ({
  align = 'center',
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'mt-auto flex flex-row items-center gap-2 border-t border-gray-300 p-4',
        alignVariant[align].root,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

DialogFooter.displayName = 'Dialog.Footer'

export default DialogFooter
