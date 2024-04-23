import { TableBody } from './Body'
import { TableCaption } from './Caption'
import { TableCell } from './Cell'
import { TableFooter } from './Footer'
import { TableHead } from './Head'
import { TableHeader } from './Header'
import { TableRoot } from './Root'
import { TableRow } from './Row'

export type * from './Body'
export type * from './Caption'
export type * from './Cell'
export type * from './Footer'
export type * from './Head'
export type * from './Header'
export type * from './Root'
export type * from './Row'

const Table = {
  Root: TableRoot,
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
}

export default Table
