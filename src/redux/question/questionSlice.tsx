import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//Reducer
import { RootState, AppThunk } from '../../redux/store'
import { questionType } from './questionModels'

//Service
import { getHealthStatus, getListAllQuestions, getListAllQuestionsRequest } from '../../service'

export interface QuestionState {
  questionList: questionType[],
  pageList: number,
  loading: boolean,
  health: boolean,
	filterValue: string
}

const initialState: QuestionState = {
	questionList: [],
	pageList: 0,
	loading: false,
	health: false,
	filterValue: ''
}

export const fetchHealth = (): AppThunk =>
  	async (dispatch) => {
  		const response = await getHealthStatus()
		if (response?.data.status === 'OK') {
			dispatch(setHealth(true))
		} else {
			dispatch(setHealth(false))
		}
	}

export const fetchQuestionList = (): AppThunk =>
	async (dispatch, getState) => {
		const { question } = getState()
		const payload: getListAllQuestionsRequest = {
			offset: question.pageList,
			filter: question.filterValue
		}
		const response = await getListAllQuestions(payload)
		dispatch(setQuestionList(response?.data))
		
		// if (response?.data.status === 'OK') {
		// 	dispatch(setHealth(true))
		// } else {
		// 	dispatch(setHealth(false))
		// }
	}

export const questionSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		setHealth(state, { payload }: PayloadAction<boolean>) {
			console.log('=====================>  ~ payload', payload)
			return { ...state, health: payload }
		},
		setPage(state, { payload }: PayloadAction<number>) {
			return { ...state, pageList: payload }
		},
		setQuestionList(state, { payload }: PayloadAction<questionType[]>) {
			return { ...state, questionList: payload}
		}
	},
})

export const { setPage, setHealth, setQuestionList } = questionSlice.actions
export const questionList = (state: RootState) => state.question.questionList
export const useHealth = (state: RootState) => state.question.health
export const useFilterValue = (state: RootState) => state.question.filterValue
export const useQuestionList = (state: RootState) => state.question.questionList

export default questionSlice.reducer