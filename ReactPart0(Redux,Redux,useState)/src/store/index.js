import {createSlice, configureStore} from '@reduxjs/toolkit'

const initial = {
    firstName: '',
    lastName: '',
    fullName: ''
}

const nameSlice = createSlice({
    name:'nameSlice',
    initialState: initial,
    reducers:{
        getFirstName(state, action){
            return { ...state, firstName: action.payload }
        },
        getLastName(state, action){
            return { ...state, lastName: action.payload.last }
        },
        getFullName(state){
            return { ...state, fullName: `${state.firstName} ${state.lastName}` }
        },

    }
})

const store = configureStore({reducer:{nameSlice: nameSlice.reducer}})

export const nameActions = nameSlice.actions

export default store 