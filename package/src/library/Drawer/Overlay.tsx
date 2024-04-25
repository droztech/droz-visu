'use client'

import { cn } from '@/src/utils/class-merge.helper'

import * as DrawerPrimitive from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface DrawerOverlayProps
  extends ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> {}

const DrawerOverlay = forwardRef<
  ElementRef<typeof DrawerPrimitive.Overlay>,
  DrawerOverlayProps
>(({ className, ...rest }, ref) => (
  <DrawerPrimitive.Overlay
    className={cn(
      'bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0  data-[state=open]:fade-in-0 fixed inset-0 z-50',
      className,
    )}
    {...rest}
    ref={ref}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

export default DrawerOverlay
