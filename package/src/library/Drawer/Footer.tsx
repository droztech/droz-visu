'use client'

import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes } from 'react'

export interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {}

const DrawerFooter = ({ className, ...rest }: DrawerFooterProps) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...rest}
  />
)
DrawerFooter.displayName = 'DrawerFooter'

export default DrawerFooter
