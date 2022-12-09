import React from 'react'
import { ButtonContainer } from './elements'

type buttonType = {
  onClick: () => void,
  children: string,
	disabled?: boolean
}

const Button = ({ onClick, children, disabled }: buttonType) => {
	return (
		<ButtonContainer onClick={onClick} disabled={disabled}>
			{children}
		</ButtonContainer>
	)
}

export default Button
