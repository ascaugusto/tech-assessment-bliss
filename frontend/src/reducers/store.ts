import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import questionReducer from './question/questionSlice'
import healthReducer from './health/healthSlice'
import screenShareReducer from './shareScreen/shareScreenSlice'

export const store = configureStore({
	reducer: {
		question: questionReducer,
    health: healthReducer,
    screenShare: screenShareReducer
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
