import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//reducer
import { useAppDispatch } from '../../reducers/hooks';
import { fetchQuestionById, useSelectedQuestion } from '../../reducers/detail/detailSlice';

//elements
import Container from '../../components/Container';
import Question from '../../components/Question';
import Text from '../../components/Text';
import { DetailContainer } from './elements';

const Detail = () => {
  
  const selectedQuestion = useSelector(useSelectedQuestion)
  const { id } = useParams()
	const dispatch = useAppDispatch()

  useEffect(() => {
      if (id && id.length > 0 && selectedQuestion.id === 0) {
        dispatch(fetchQuestionById(id))
      }
  }, [])

  return (
    <DetailContainer>
      <Container paddingBottom='32px'>
        <Text bold size='32px'> 
          {`QUESTION NUMBER ${selectedQuestion.id}`} 
        </Text>
      </Container>
      <Question 
        id={selectedQuestion.id}
        question={selectedQuestion.question} 
        image_url={selectedQuestion.image_url}
        thumb_url={selectedQuestion.thumb_url}
        published_at={selectedQuestion.published_at}
        choices={selectedQuestion.choices}
      />
    </DetailContainer>
  );
};

export default Detail;