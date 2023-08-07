import { createSlice } from "@reduxjs/toolkit";

const initial = {toggle:true}

const toggleSlice = createSlice({
    name:"toggleSlice",
    initialState:initial,
    reducers:{
        getToggle(state){
            // state.toggle = !state.toggle
            return {...state, toggle:!state.toggle}
        }
    }

})

export const toggleActions = toggleSlice.actions

export default toggleSlice.reducer
