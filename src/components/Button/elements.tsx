import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

type ButtonContainerType = {
  disabled?: boolean
}

export const ButtonContainer = styled.button<ButtonContainerType>`
  appearance: none;
  background: none;
  font-size: 22px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: ${COLORS.pearlAqua};;
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(0, 146, 136, 0.1);
  border-radius: 2px;
  transition: all 0.15s;
  ${props => props.disabled && 'opacity: 50%'};

  :hover,
  :focus {
    ${props => props.disabled ? 'border: 2px solid transparent;' : 'border: 2px solid rgba(0, 146, 136, 0.4);'};
  }
`