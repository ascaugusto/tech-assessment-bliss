import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import questionReducer from '../redux/question/questionSlice'

export const store = configureStore({
	reducer: {
		question: questionReducer
	},
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
