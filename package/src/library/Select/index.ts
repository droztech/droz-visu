import SelectItem from './Item'
import SelectRoot from './Root'
import SearchInput from './Search'

export type { SelectRootProps } from './Root'
export type { SelectItemProps } from './Item'
export type { SearchInputProps } from './Search'

const Select = {
  Root: SelectRoot,
  Item: SelectItem,
  Search: SearchInput,
}

export default Select
