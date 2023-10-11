import { createSlice, configureStore } from "@reduxjs/toolkit";

const initial = {data:[]}

const dataSlice = createSlice({
    name:"dataSlice",
    initialState:initial,
    reducers:{
        getData(state, action){
            state.data = action.payload
            return state
        }
    }
})

const store = configureStore({ reducer: { dataSlice: dataSlice.reducer }})

export const dataActions = dataSlice.actions
export default store 

