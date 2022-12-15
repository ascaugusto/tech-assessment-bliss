

import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

//components
import { PaginantionContainer } from './elements';
import Text from '../Text'

type paginationType = {
  previousClick: () => void,
  currentPage: number,
  fowardClick: () => void,
}

const Pagination = ({previousClick, currentPage, fowardClick}: paginationType) => {
  return (
    <PaginantionContainer>
        {currentPage > 1 && <AiFillCaretLeft cursor='pointer' size='26' onClick={previousClick}/>}
        <Text bold size='20px'>
          {currentPage.toString()}
        </Text>
        <AiFillCaretRight cursor='pointer' size='26' onClick={fowardClick} />
    </PaginantionContainer>
  );
};

export default Pagination;