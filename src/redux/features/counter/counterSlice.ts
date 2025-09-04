import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    conte: 0
}

const counterSlice = createSlice({
name: 'counter',
  initialState,
    reducers: {
        increment: ()=>{

        }
    }
})