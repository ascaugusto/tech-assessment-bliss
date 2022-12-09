import styled from 'styled-components'
import { COLORS } from '../utils/constants'

type columnProps = {
  column?: boolean,
  height?: string,
  width?: string,
  justify?: string,
  align?: string,
  disabled?: boolean,
  paddingTop?: string,
  paddingBottom?: string,
  marginTop?: string,
  marginBottom?: string,
  paddingRight?: string,
  border?: boolean
}

export const Container = styled.div<columnProps>`
  display: flex;
  ${props => props.column && 'flex-direction: column;'}
  ${props => props.height && `height: ${props.height};`}
  ${props => props.width && `width: ${props.width};`}
  ${props => props.justify && `justify-content: ${props.justify};`}
  ${props => props.align && `align-items: ${props.align};`}
  ${props => props.disabled && 'opacity: 30%;'}
  ${props => props.paddingTop && `padding-top: ${props.paddingTop};`}
  ${props => props.marginTop && `margin-top: ${props.marginTop};`}
  ${props => props.paddingBottom && `padding-bottom: ${props.paddingBottom};`}
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
  ${props => props.paddingRight && `padding-right: ${props.paddingRight};`}
  ${props => props.border && `border: 1px solid ${COLORS.earieBlack};`}
  overflow: hidden;
`

export default Container