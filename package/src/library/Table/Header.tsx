import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes, forwardRef } from 'react'

export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ className, ...rest }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...rest} />
))
TableHeader.displayName = 'TableHeader'
