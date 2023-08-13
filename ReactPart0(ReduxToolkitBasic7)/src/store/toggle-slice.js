import { createSlice } from '@reduxjs/toolkit'


const toggleSlice = createSlice({
    name: "toggleSlice",
    initialState: { toggle: true },
    reducers: {
        toggleHandler(state) {
            return { ...state, toggle: !state.toggle }
        }
    }
})

export default toggleSlice