import { describe, it, expect } from 'vitest'

//constants
import { MOCKED_QUESITON } from '../../utils/testUtils'

//reducer
import questionReducer,
  {
    QuestionState,
    setFilterValue,
    setPage,
    setPageLimit,
    setQuestionList,
    setQuestionMessage
  }
from './questionSlice'

describe('question reducer', () => {
  const initialState: QuestionState = {
    questionList: [],
    pageList: 1,
    pageLimit: 10,
    filterValue: '',
    questionMessage: ''
  }
  it('Should set the questionList', () => {
    const newQuestionList = questionReducer(initialState, setQuestionList([MOCKED_QUESITON]))
    expect(newQuestionList.questionList.length > 0).toBeTruthy()
  })

  it('Should set the pageList', () => {
    const newQuestionList = questionReducer(initialState, setPage(2))
    expect(newQuestionList.pageList).toBe(2)
  })

  it('Should set the pageLimit', () => {
    const newQuestionList = questionReducer(initialState, setPageLimit(5))
    expect(newQuestionList.pageLimit).toBe(5)
  })

  it('Should set the filterValue', () => {
    const newQuestionList = questionReducer(initialState, setFilterValue('Ruby'))
    expect(newQuestionList.filterValue).toBe('Ruby')
  })

  it('Should set the questionMessage', () => {
    const newQuestionList = questionReducer(initialState, setQuestionMessage('No questions find!'))
    expect(newQuestionList.questionMessage).toBe('No questions find!')
  })
})