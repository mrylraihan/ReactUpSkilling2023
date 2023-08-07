import {configureStore} from '@reduxjs/toolkit'
import toggleSlice from './toggleSlice'
import counterSlice from './counterSlice'

// const store = configureStore({reducer:counterSlice.reducer})
const store = configureStore({reducer:{countSlice: counterSlice.reducer, toggleSlice:toggleSlice.reducer}})// if we have multiple slices then we would want to map our slices to a key

// Techincally this should be in the same file that the createSlice is in
export const counterActions = counterSlice.actions// will allow us to use the reducer methods for our dispatch 
export const toggleActions = toggleSlice.actions// will allow us to use the reducer methods for our dispatch 

export default store