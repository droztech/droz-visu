'use client'

import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes } from 'react'

export interface DrawerBodyProps extends HTMLAttributes<HTMLDivElement> {}

const DrawerBody = ({ className, children, ...rest }: DrawerBodyProps) => (
  <div className="flex-1 overflow-auto">
    <div className={cn('flex flex-col', className)} {...rest}>
      {children}
    </div>
  </div>
)
DrawerBody.displayName = 'DrawerBody'

export default DrawerBody
