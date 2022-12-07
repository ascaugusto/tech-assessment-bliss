import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const ButtonContainer = styled.button`
  appearance: none;
  background: none;
  font-size: 32px;
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

  :hover,
  :focus {
    border: 2px solid rgba(0, 146, 136, 0.4);
  }
`