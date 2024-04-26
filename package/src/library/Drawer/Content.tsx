'use client'

import DrawerOverlay from './Overlay'
import DrawerPortal from './Portal'

import { cn } from '@/src/utils/class-merge.helper'

import * as DrawerPrimitive from '@radix-ui/react-dialog'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export interface DrawerContentProps
  extends ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {}

const DrawerContent = forwardRef<
  ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ className, children, ...rest }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-y-0 right-0 z-50 w-2/3 p-4 transition data-[state=closed]:animate-swipeOut data-[state=open]:animate-swipeIn',
        className,
      )}
      {...rest}
    >
      <div className="flex h-full flex-col rounded-lg bg-gray-100 shadow-lg">
        {children}
      </div>
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = DrawerPrimitive.Content.displayName

export default DrawerContent
