
import { createSlice } from '@reduxjs/toolkit'

const initial = {
    counter: 0,
    toggle: true
}

const counterSlice = createSlice({
    name: "counterSlice",
    initialState: initial,
    reducers: {
        add(state) {
            return { ...state, counter: state.counter + 1 }
        },
        minus(state) {
            return { ...state, counter: state.counter - 1 }
        },
        increase(state, action) {
            return { ...state, counter: state.counter + action.payload }
        }
    }
})

export default counterSlice