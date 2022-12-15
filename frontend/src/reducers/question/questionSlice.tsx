//Reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../store'
import { questionType } from './questionModels'

//Service
import {
	getListAllQuestions,
	getListAllQuestionsRequest
} from '../../service'

export interface QuestionState {
  questionList: questionType[],
  pageList: number,
  pageLimit: number,
	filterValue: string,
	questionMessage: string,
}

const initialState: QuestionState = {
	questionList: [],
	pageList: 1,
	pageLimit: 10,
	filterValue: '',
	questionMessage: ''
}

export const fetchQuestionList = (): AppThunk =>
async (dispatch, getState) => {
		const { question } = getState()
		const payload: getListAllQuestionsRequest = {
			limit: question.pageLimit,
			offset: question.pageList,
			filter: question.filterValue
		}
		const response = await getListAllQuestions(payload)
		if (response?.data.statusMessage) {
			dispatch(setQuestionMessage(response?.data.statusMessage))
			dispatch(setQuestionList([]))
		} else {
			let newQuestionList = response?.data
			dispatch(setQuestionList(newQuestionList))
		}
	}

export const questionSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		setPage(state, { payload }: PayloadAction<number>) {
			return { ...state, pageList: payload }
		},
		setPageLimit(state, { payload }: PayloadAction<number>) {
			return { ...state, pageLimit: payload }
		},
		setQuestionList(state, { payload }: PayloadAction<questionType[]>) {
			return { ...state, questionList: payload}
		},
		setFilterValue(state, { payload }: PayloadAction<string>) {
			return { ...state, filterValue: payload}
		},
		setQuestionMessage(state, { payload }: PayloadAction<string>) {
			return { ...state, questionMessage: payload}
		},
		increasePage(state) {
			return { ...state, pageList: state.pageList + 1}
		},
		decreasePage(state) {
			return { ...state, pageList: state.pageList - 1}
		},
		setLastPage(state) {
			return { ...state, lastPage: true}
		},
	}
})

export const {
	setPage,
	setPageLimit,
	setQuestionList,
	setFilterValue,
	setQuestionMessage,
	increasePage,
	setLastPage,
	decreasePage
} = questionSlice.actions

export const questionList = (state: RootState) => state.question.questionList
export const useFilterValue = (state: RootState) => state.question.filterValue
export const useQuestionList = (state: RootState) => state.question.questionList
export const useQuestionMessage = (state: RootState) => state.question.questionMessage
export const usePageList = (state: RootState) => state.question.pageList
export const usePageLimit = (state: RootState) => state.question.pageLimit

export default questionSlice.reducer