import React from 'react'
import { SearchInputContainer } from './elements'

type SearchInputType = {
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const SearchInput = ({ value, onChange }: SearchInputType) => {
	return (
		<SearchInputContainer
			value={value}
			onChange={onChange}
		/>
	)
}

export default SearchInput