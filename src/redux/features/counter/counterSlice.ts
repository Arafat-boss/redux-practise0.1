import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counte: 0
}

const counterSlice = createSlice({
name: 'counter',
  initialState,
    reducers: {
        increment: (state)=>{
           state.counte = state.counte + 1
        },
        decrement: (state)=>{
           state.counte = state.counte + 1
        }
    }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer