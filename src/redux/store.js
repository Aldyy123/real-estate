import { configureStore } from '@reduxjs/toolkit'
import {properyPlaceSlice, modalHandler, typeProperty, statusProperty} from './slices/index'

export default configureStore({
  reducer: {
    propertyPlaces: properyPlaceSlice,
    modalHandler, typeProperty,
    statusProperty
  }
})
