import {createSlice} from '@reduxjs/toolkit';

const initialName = {
    firstName:'',
    lastName:'',
    fullName:''
}

const nameSlice = createSlice({
    name:'nameSlice',
    initialState: initialName,
    reducers:{
        getFirst(state, action){
            return {...state, firstName: action.payload}
        },
        getLast(state, action){
            return {...state, lastName: action.payload}
        },
        getFull(state) {
            return { ...state, fullName: `${state.firstName} ${state.lastName}`, lastName:'', firstName:'' }
        },
        
    }
})

export const nameActions = nameSlice.actions

export default nameSlice.reducer