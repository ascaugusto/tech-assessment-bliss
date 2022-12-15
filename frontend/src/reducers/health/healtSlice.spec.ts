import { describe, it, expect } from 'vitest'
import healthReducer, { HealthState, setHealth } from './healthSlice'


describe('health reducer', () => {
  const initialState: HealthState = {
    health: false
  }
  it('Should set health', () => {
    const newHealth = healthReducer(initialState, setHealth(true))
    expect(newHealth.health).toBe(true)
  })
})