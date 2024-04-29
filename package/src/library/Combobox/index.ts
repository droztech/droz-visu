import ComboboxEmpty from './Empty'
import ComboboxInput from './Input'
import ComboboxItem from './Item'
import ComboboxList from './List'
import ComboboxRoot from './Root'

export type * from './Empty'
export type * from './Input'
export type * from './Item'
export type * from './List'
export type * from './Root'

const Combobox = {
  Root: ComboboxRoot,
  Input: ComboboxInput,
  List: ComboboxList,
  Item: ComboboxItem,
  Empty: ComboboxEmpty,
}

export default Combobox
