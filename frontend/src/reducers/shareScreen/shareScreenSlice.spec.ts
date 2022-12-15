import { describe, it, expect } from 'vitest'
import shareScreenReducer, { ShareScreenState, setLoadingShare, setScreenShared } from './shareScreenSlice'


describe('share screen reducer', () => {
  const initialState: ShareScreenState = {
    loadingShare: false,
    screenShared: false
  }
  it('Should set loadingShare', () => {
    const newHealth = shareScreenReducer(initialState, setLoadingShare(true))
    expect(newHealth.loadingShare).toBe(true)
  })

  it('Should set screenShared', () => {
    const newHealth = shareScreenReducer(initialState, setScreenShared(true))
    expect(newHealth.screenShared).toBe(true)
  })

})