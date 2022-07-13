import { createSlice } from '@reduxjs/toolkit'

export const propertyPlaces = createSlice({
  name: 'propertyPlaces',
  initialState: {
    id: 0,
    place: null
  },
  reducers: {
    setPropertiPlace: (state, action) => {
      state.id = action.payload.id
      state.place = action.payload.place
    }
  }
})

export const { setPropertiPlace } = propertyPlaces.actions

export default propertyPlaces.reducer
