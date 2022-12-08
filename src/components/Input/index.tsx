import React, { Ref } from 'react'

//components
import { InputComponent, SearchInputContainer } from './elements'
import { AiOutlineClose } from 'react-icons/ai'
import Container from '../Container'

type SearchInputType = {
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
	ref?: React.Ref<HTMLInputElement>,
	onClearSearch: () => void
}

const Input = React.forwardRef(({ value, onChange, onClearSearch }: SearchInputType, ref: Ref<HTMLInputElement>) => {
	return (
		<SearchInputContainer
			onChange={onChange}
		>
			<InputComponent
				value={value}
				ref={ref}
			/>
			{value && (
				<Container justify='center' width='42px' onClick={onClearSearch}>
				 <AiOutlineClose size={26}/>
				</Container>
			)}
		</SearchInputContainer>
	)

	Input.displayName = 'Input'
})

export default Input