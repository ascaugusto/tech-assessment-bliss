import React from 'react'
import { TextComponent } from './elements'

type childrenType = {
  children: string,
  size?: string,
  color?: string,
  clicker?: boolean,
  bold?: boolean,
	paddingRight?: string,
	onClick?: () => void
}

function Text({ children, size, color, clicker, bold, paddingRight, onClick}: childrenType) {
	return (
		<TextComponent
			size={size}
			color={color}
			clicker={clicker}
			bold={bold}
			paddingRight={paddingRight}
			onClick={onClick}
		>
			{children}
		</TextComponent>
	)
}

export default Text