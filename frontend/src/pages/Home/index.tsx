import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

//components
import Container from '../../components/Container';
import Text from '../../components/Text';

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container column width='100%' justify='center' paddingTop='10vh' align='center'>
      <Text size='32px' bold>WELCOME TO BLISS TECH ASSESSMENT</Text>
      <Container paddingTop='32px'>
        <Button
          onClick={() => navigate('/questions')}
        >
          Questions
        </Button>
      </Container>
    </Container>
  );
};

export default Home;