import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
  height: 32px;
  border: 2px solid rgba(0, 146, 136, 0.2);
  color: ${COLORS.pearlAqua};
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(0, 146, 136, 0.1);
  border-radius: 8px;
  margin-bottom: 32px;
  
  :hover,
  :focus {
    border: 2px solid rgba(0, 146, 136, 0.4);
  }
`

export const InputComponent = styled.input`
  appearance: none;
  background: none;
  outline: none;
  padding-left: 6px;
  width: 100%;
  height: 100%;
  border: none;
  color: ${COLORS.pearlAqua};
  font-size: 14px;
  font-weight: bold;
`