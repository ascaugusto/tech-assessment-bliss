import styled from 'styled-components'

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  padding-top: 8vh;
  padding-left: 10vw;
  padding-right: 10vw;
`

export const QuestionItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1000px;

  @media (max-width: 700px) {
    justify-content: center;
    width: 600px;
  }
`

export const SearchAndButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 600px;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 16px;
  }
`