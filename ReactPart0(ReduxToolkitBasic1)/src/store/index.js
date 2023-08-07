// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {
    firstName : '',
    lastName : '',
    fullName : '',
}

// const nameReducer = (state, action)=>{
//     if(action.type == 'fName'){
//         return {...state, firstName: action.fn}
//     } else if (action.type == 'lName') {
//         return { ...state, lastName: action.ln }
//     } else if (action.type == 'flName') {
//         return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName:'', lastName:'' }
//     } else{
//         return initialState
//     }
// }

const nameSlice = createSlice({
    name:'nameSlice',
    initialState: initialState,
    reducers:{
        getFirstName(state, action){
            return { ...state, firstName: action.payload.fn }
        },
        getLastName(state, action){
            return { ...state, lastName: action.payload.ln }
        },
        getFullName(state){
            return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName: '', lastName: '' }
        }

    }
})

// const store = createStore(nameReducer, initialState)
const store = configureStore({reducer:nameSlice.reducer})
export const nameActions = nameSlice.actions
export default store