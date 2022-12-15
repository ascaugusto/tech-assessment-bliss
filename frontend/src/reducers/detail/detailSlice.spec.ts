import {describe, it, expect} from 'vitest'

//reducer
import detailReducer, { setSelectedQuestion, DetailState } from './detailSlice';
//constants
import { MOCKED_QUESITON } from '../../utils/testUtils';

describe('details reducer', ()=> {
  const initialState: DetailState = {
    selectedQuestion: {
      id: 0,
      question: '', 
      image_url: '',
      thumb_url: '',
      published_at: '',
      choices: []
    }
  }
  it('Should set the selected question', () => {
    const newSelectedQuestion = detailReducer(initialState, setSelectedQuestion(MOCKED_QUESITON))
    expect(newSelectedQuestion.selectedQuestion.id).toEqual(MOCKED_QUESITON.id)
  })

})
