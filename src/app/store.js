import { configureStore } from '@reduxjs/toolkit'
import stockReducer from './Redux/Stock/StockSlice'

export default configureStore({
  reducer: {
    counter: stockReducer,
  },
})