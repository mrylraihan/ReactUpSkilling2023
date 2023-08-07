import { createSlice } from '@reduxjs/toolkit'


const initial = {
    count: 0,
}
const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initial,
    reducers: {
        increment: (state) => {
            return { ...state, count: state.count + 1 }
        },
        decrement: (state) => {
            return { ...state, count: state.count - 1 }
        },
        increase: (state, action) => {
            return { ...state, count: state.count + action.payload }
        },
        toggleCounter: (state) => {
            return { ...state, toggle: !state.toggle }
        }
    }
})

export default counterSlice