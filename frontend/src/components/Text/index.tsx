import React from 'react'
import { TextComponent } from './elements'

type childrenType = {
  children: string,
  size?: string,
  color?: string,
  clicker?: boolean,
  bold?: boolean,
	paddingRight?: string
}

function Text({ children, size, color, clicker, bold, paddingRight}: childrenType) {
	return (
		<TextComponent
			size={size}
			color={color}
			clicker={clicker}
			bold={bold}
			paddingRight={paddingRight}
		>
			{children}
		</TextComponent>
	)
}

export default Text