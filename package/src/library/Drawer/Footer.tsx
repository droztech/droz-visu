'use client'

import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes } from 'react'

export interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {}

const DrawerFooter = ({ className, ...rest }: DrawerFooterProps) => (
  <div
    className={cn('flex gap-4 border-t border-gray-300 p-4', className)}
    {...rest}
  />
)
DrawerFooter.displayName = 'DrawerFooter'

export default DrawerFooter
