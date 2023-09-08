import {createSlice, configureStore} from '@reduxjs/toolkit'

const initial ={
    firstName:'',
    lastName:'' ,
    fullName:''
}

const nameSlice = createSlice({
    name : 'nameSlice',  // slice name
    initialState: initial,
    reducers:{
    setFirstName:(state, action)=>{ 
        return {...state, firstName:action.payload}
    },
    setLastName:(state, action)=>{ 
        return {...state, lastName:action.payload}
    },
    setFullName:(state)=>{ 
        return {...state, fullName:`${state.firstName} ${state.lastName}`, firstName:'', lastName:''}
    },
}
})

const store = configureStore({ reducer: {nameSlice: nameSlice.reducer}})


export default store;

export const nameActions = nameSlice.actions