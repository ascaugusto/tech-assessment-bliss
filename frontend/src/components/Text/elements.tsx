import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

interface textComponentProps {
  size?: string,
  color?: string,
  clicker?: boolean,
  bold?: boolean,
  paddingRight?: string
}

export const TextComponent = styled.div<textComponentProps>`
  font-size: ${props => props.size ? props.size : '12px'};
  color: ${props => props.color ? props.color : COLORS.pearlAqua};
  ${props => props.clicker && 'cursor: pointer;' }
  ${props => props.bold && 'font-weight: bold;' }
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${props => props.paddingRight && `padding-right: ${props.paddingRight};` }
`