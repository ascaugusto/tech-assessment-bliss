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
	filterValue: string,
	questionMessage: string,
	lastPage: boolean,
}

const initialState: QuestionState = {
	questionList: [],
	pageList: 1,
	filterValue: '',
	questionMessage: '',
	lastPage: false
}

export const fetchQuestionList = (): AppThunk =>
	async (dispatch, getState) => {
		const { question } = getState()
		const payload: getListAllQuestionsRequest = {
			offset: question.pageList,
			filter: question.filterValue
		}
		const response = await getListAllQuestions(payload)
		if (question.pageList === 1 && response?.data.statusMessage) {
			dispatch(setQuestionMessage(response?.data.statusMessage))
		} else if (response?.data.statusMessage) {
			dispatch(setLastPage())
		} else {
			let newQuestionList = question.questionList.concat(response?.data)
			dispatch(setQuestionList(newQuestionList))
		}
		
	}

export const questionSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		setHealth(state, { payload }: PayloadAction<boolean>) {
			return { ...state, health: payload }
		},
		setPage(state, { payload }: PayloadAction<number>) {
			return { ...state, pageList: payload }
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
		setLastPage(state) {
			return { ...state, lastPage: true}
		},
	}
})

export const {
	setPage,
	setQuestionList,
	setFilterValue,
	setQuestionMessage,
	increasePage,
	setLastPage,
} = questionSlice.actions

export const questionList = (state: RootState) => state.question.questionList
export const useFilterValue = (state: RootState) => state.question.filterValue
export const useQuestionList = (state: RootState) => state.question.questionList
export const useQuestionMessage = (state: RootState) => state.question.questionMessage
export const useLastPage = (state: RootState) => state.question.lastPage

export default questionSlice.reducer