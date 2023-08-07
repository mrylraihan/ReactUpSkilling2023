import {createSlice} from '@reduxjs/toolkit'

const initialToggle = {
    toggle:true
}

const toggleSlice = createSlice({
    name:'toggleSlice',
    initialState:initialToggle,
    reducers:{
        getToggle(state){
            return {...state, toggle:!state.toggle}
        }
    }
})

export const toggleActions = toggleSlice.actions

export default toggleSlice.reducer