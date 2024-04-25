'use client'

import DrawerOverlay from './Overlay'
import DrawerPortal from './Portal'

import { cn } from '@/src/utils/class-merge.helper'

import { X } from '@phosphor-icons/react'
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
        'data-[state=open]:animate-in data-[state=closed]:animate-out dark:bg-gray-950 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right fixed inset-y-0 right-0 z-50 flex h-full w-3/4 flex-col gap-4 border-l bg-gray-100 p-6 shadow-lg transition  ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 sm:max-w-sm',
        className,
      )}
      {...rest}
    >
      {children}
      <DrawerPrimitive.Close className="ring-offset-white focus:ring-gray-950 dark:ring-offset-gray-950 absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 dark:focus:ring-gray-300 dark:data-[state=open]:bg-gray-800">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DrawerPrimitive.Close>
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = DrawerPrimitive.Content.displayName

export default DrawerContent
