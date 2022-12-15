//Reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//reducer
import { RootState, AppThunk } from '../store'

//models
import { questionType } from '../question/questionModels'
import { getQuestionById } from '../../service'

export interface DetailState {
  selectedQuestion: questionType
}

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

export const fetchQuestionById =  (id: string): AppThunk =>
async (dispatch) => {
  const response = await getQuestionById(id)
  dispatch(setSelectedQuestion(response?.data[0]))
}

export const detailSlice = createSlice({
	name: 'detail',
	initialState,
	reducers: {
		setSelectedQuestion(state, { payload }: PayloadAction<questionType>) {
			return { ...state, selectedQuestion: payload }
		},
  },
})

export const {
  setSelectedQuestion
} = detailSlice.actions

export const useSelectedQuestion = (state: RootState) => state.detail.selectedQuestion

export default detailSlice.reducer

