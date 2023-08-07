import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
toggle:true
}
const toggleSlice = createSlice({
    name: 'toggleSlice',
    initialState: initialState,
    reducers: {
        toggleHandler: (state) => {
            return { ...state, toggle: !state.toggle }
        }
    }
})



export default toggleSlice
