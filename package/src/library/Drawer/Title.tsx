'use client'

import { cn } from '@/src/utils/class-merge.helper'

import * as DrawerPrimitive from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface DrawerTitleProps
  extends ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> {}

const DrawerTitle = forwardRef<
  ElementRef<typeof DrawerPrimitive.Title>,
  DrawerTitleProps
>(({ className, ...rest }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      'text-gray-950 dark:text-gray-50 text-lg font-semibold',
      className,
    )}
    {...rest}
  />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

export default DrawerTitle
