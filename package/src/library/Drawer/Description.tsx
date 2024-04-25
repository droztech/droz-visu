'use client'

import { cn } from '@/src/utils/class-merge.helper'

import * as DrawerPrimitive from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface DrawerDescriptionProps
  extends ComponentPropsWithoutRef<typeof DrawerPrimitive.Description> {}

const DrawerDescription = forwardRef<
  ElementRef<typeof DrawerPrimitive.Description>,
  DrawerDescriptionProps
>(({ className, ...rest }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn('text-sm text-gray-500 dark:text-gray-400', className)}
    {...rest}
  />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export default DrawerDescription
