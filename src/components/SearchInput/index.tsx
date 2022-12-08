import React, { Ref } from 'react'
import { SearchInputContainer } from './elements'

type SearchInputType = {
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
	ref?: React.Ref<HTMLInputElement>
}

const SearchInput = React.forwardRef(({ value, onChange }: SearchInputType, ref: Ref<HTMLInputElement>) => {
	return (
		<SearchInputContainer
			value={value}
			onChange={onChange}
			ref={ref}
		/>
	)

	SearchInput.displayName = 'SearchInput'
})

export default SearchInput