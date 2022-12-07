import React from 'react'
import { ButtonContainer } from './elements'

type buttonType = {
  onClick: () => void,
  children: string
}

const Button = ({ onClick, children }: buttonType) => {
	return (
		<ButtonContainer onClick={onClick}>
			{children}
		</ButtonContainer>
	)
}

export default Button
