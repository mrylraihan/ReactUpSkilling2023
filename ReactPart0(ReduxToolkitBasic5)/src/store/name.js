import { createSlice } from "@reduxjs/toolkit";

const initial = {
    firstName:"",
    lastName:"",
    fullName:""
} 

const nameSlice = createSlice({
    name:"nameSlice",
    initialState:initial,
    reducers:{
        getFirstName(state, action){
            state.firstName = action.payload.first
            // return {...state, firstName:action.payload.first}
        },
        getLastName(state, action){
            state.lastName = action.payload.last
            // return { ...state, lastName: action.payload.last }
        },
        getFullName(state){
            state.fullName = `${state.firstName} ${state.lastName}`
            state.firstName = ''
            state.lastName= ''
            // return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName:'', lastName:""}
        }
    }
})

export const nameActions = nameSlice.actions

export default nameSlice.reducer