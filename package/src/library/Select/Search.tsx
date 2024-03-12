import { MagnifyingGlass } from '@phosphor-icons/react'
import * as RadixSelect from '@radix-ui/react-select'
import { FC, useState, ChangeEvent } from 'react'

export interface SearchInputProps {
  onChange: (value: string) => void
  searchPlaceholder?: string
}

const SearchInput: FC<SearchInputProps> = ({ onChange, searchPlaceholder }) => {
  const [searchText, setSearchText] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchText(value)
    onChange(value)
  }

  return (
    <div className="flex items-center px-4 py-2">
      <label htmlFor="search" className="sr-only">
        {searchPlaceholder}
      </label>
      <RadixSelect.Icon>
        <MagnifyingGlass />
      </RadixSelect.Icon>
      <input
        id="search"
        type="text"
        placeholder={searchPlaceholder}
        value={searchText}
        onChange={handleInputChange}
        className="px-4 py-2"
      />
    </div>
  )
}

export default SearchInput
