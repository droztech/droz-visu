'use client'

import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes } from 'react'

export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const DrawerHeader = ({ className, ...rest }: DrawerHeaderProps) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className,
    )}
    {...rest}
  />
)
DrawerHeader.displayName = 'DrawerHeader'

export default DrawerHeader
