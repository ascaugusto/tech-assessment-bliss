//Reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../store'

import { getHealthStatus } from '../../service'

export interface HealthState {
  health: boolean
}

const initialState: HealthState = {
	health: false
}

export const fetchHealth = (): AppThunk =>
async (dispatch) => {
  try {
    const response = await getHealthStatus()
    if (response.data.status === 'OK') {
      dispatch(setHealth(true))
    } else {
      dispatch(setHealth(false))
    }
  } catch (error) {
    dispatch(setHealth(false))
  }
}

export const healthSlice = createSlice({
	name: 'health',
	initialState,
	reducers: {
		setHealth(state, { payload }: PayloadAction<boolean>) {
			return { ...state, health: payload }
		},
  },
})

export const {
  setHealth
} = healthSlice.actions


export const useHealth = (state: RootState) => state.health.health

export default healthSlice.reducer

