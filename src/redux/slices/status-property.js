import { createSlice } from '@reduxjs/toolkit'

export const statusProperty = createSlice({
  name: 'statusProperty',
  initialState: {
    id: 0,
    title: null
  },
  reducers: {
    setstatusProperty: (state, action) => {
        state = {
            ...action.payload
        }
        return state
    }
  }
})

export const { setstatusProperty } = statusProperty.actions

export default statusProperty.reducer
