import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const SearchInputContainer = styled.input`
  appearance: none;
  background: none;
  outline: none;
  width: 260px;
  height: 32px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid rgba(0, 146, 136, 0.2);
  color: ${COLORS.pearlAqua};;
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(0, 146, 136, 0.1);
  border-radius: 8px;
  margin-bottom: 32px;
  padding-left: 6px;
  
  :hover,
  :focus {
    border: 2px solid rgba(0, 146, 136, 0.4);
  }
`