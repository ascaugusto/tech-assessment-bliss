import styled from 'styled-components'

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(0, 146, 136, 0.2);
  border-radius: 8px;
  padding: 6px;
  margin-bottom: 12px;
  cursor: pointer;
  background-color: rgba(0, 146, 136, 0.1);

  :hover {
    border: 2px solid rgba(0, 146, 136, 0.4);
  }
`

export const QuestionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding-top: 8px;

  @media (max-width: 700px) {
    justify-content: center;
  }
`

export const ImgWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
`

export const QuestionChoiceWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  padding-top: 6px;
`