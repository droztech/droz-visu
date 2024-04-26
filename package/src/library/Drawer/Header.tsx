'use client'

import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes } from 'react'

export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const DrawerHeader = ({ className, ...rest }: DrawerHeaderProps) => (
  <div
    className={cn('flex border-b border-gray-300 p-4', className)}
    {...rest}
  />
)
DrawerHeader.displayName = 'DrawerHeader'

export default DrawerHeader
