import {createStore} from 'redux'

const initialState = {
    firstName : '',
    lastName : '',
    fullName : '',
}

const nameReducer = (state, action)=>{
    if(action.type == 'fName'){
        return {...state, firstName: action.fn}
    } else if (action.type == 'lName') {
        return { ...state, lastName: action.ln }
    } else if (action.type == 'flName') {
        return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName:'', lastName:'' }
    } else{
        return initialState
    }
}

const store = createStore(nameReducer, initialState)

export default store