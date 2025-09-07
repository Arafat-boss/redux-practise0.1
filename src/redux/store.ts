import { configureStore } from '@reduxjs/toolkit'
import countrReducer from './features/counter/counterSlice'

 export const store = configureStore({
    reducer: {
         counter: countrReducer
    }
})

