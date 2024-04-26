import { HTMLAttributes, forwardRef } from 'react'

export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ ...rest }, ref) => <thead ref={ref} {...rest} />)
TableHeader.displayName = 'TableHeader'
