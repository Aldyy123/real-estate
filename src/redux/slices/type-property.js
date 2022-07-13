import { createSlice } from '@reduxjs/toolkit'

export const typeProperty = createSlice({
  name: 'typeProperty',
  initialState: {
    id: 0,
    type: null
  },
  reducers: {
    setTypeProperty: (state, action) => {
        state = {
            ...action.payload
        }
        return state
    }
  }
})

export const { setTypeProperty } = typeProperty.actions

export default typeProperty.reducer
