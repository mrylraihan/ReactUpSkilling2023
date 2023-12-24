import {configureStore, createSlice} from '@reduxjs/toolkit'
import { testSlice } from './actiontest'

const initial = []

const dataSlice = createSlice({
    name:"dataSlice",
    initialState:initial,
    reducers:{
        getData:(state, action)=>{
            return action.payload.data
        }
    }

})

const store = configureStore({
    reducer:{dataSlice:dataSlice.reducer, testSlice:testSlice.reducer}
})
export const dataActions = dataSlice.actions
export default store;