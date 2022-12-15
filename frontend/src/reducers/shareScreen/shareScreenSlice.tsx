//Reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../store'
import { shareURL, shareURLType } from '../../service'

export interface ShareScreenState {
  loadingShare: boolean,
	screenShared: boolean
}

const initialState: ShareScreenState = {
	loadingShare: false,
	screenShared: false
}

export const submitShareUrl = (email: string): AppThunk =>
	async dispatch => {
		dispatch(setLoadingShare(true))
		const payload: shareURLType = {
			url: window.location.href,
			email: email
		}
		const response = await shareURL(payload)
		if (response?.status === 200) {
			alert(`Page:${payload.url} sent successfully!`, )
			dispatch(setScreenShared(true))
			dispatch(setLoadingShare(false))
		} else {
			alert('Error when sending page, try again later!')
			dispatch(setLoadingShare(false))
		}
	}

export const shareScreenSlice = createSlice({
	name: 'share',
	initialState,
	reducers: {
    setLoadingShare(state, { payload }: PayloadAction<boolean>) {
			return { ...state, loadingShare: payload}
		},
		setScreenShared(state, { payload }: PayloadAction<boolean>) {
			return { ...state, screenShared: payload}
		},
  },
})

//export the actions
export const {
  setScreenShared, 
  setLoadingShare
} = shareScreenSlice.actions

//export the states
export const useScreenShared = (state: RootState) => state.screenShare.screenShared
export const useLoadingShare = (state: RootState) => state.screenShare.loadingShare

export default shareScreenSlice.reducer
