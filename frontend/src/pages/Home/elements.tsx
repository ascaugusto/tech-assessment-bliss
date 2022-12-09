import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  padding-top: 10vh;
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