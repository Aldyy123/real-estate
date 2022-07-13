import { createSlice } from '@reduxjs/toolkit'

export const modalHandler = createSlice({
  name: 'modalHandler',
  initialState: {
    open: false,
    type: 0,
    fullPopUp: false
  },
  reducers: {
    setOpenModal: (state, action) => {
        state = {
            ...action.payload
        }
        return state
    }
  }
})

export const { setOpenModal } = modalHandler.actions

export default modalHandler.reducer
