import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice'
import todoReducer from '../features/Todos/todoSlice'

export const store = configureStore({
  reducer: {counterReducer,todoReducer},
})