import {createStore} from 'redux'

const initial = {
    firstName:"",
    lastName:"",
    fullName:""
}

const nameReducer = (state, action)=>{
    if(action.type === 'first'){
        return {...state, firstName: action.first}
    }else if(action.type === 'last'){
        return {...state, lastName:action.last}
    }else if(action.type === 'full'){
        return {...state, fullName:`${state.firstName} ${state.lastName}`, firstName:'', lastName:''}
    }else{
        return state
    }
}

const store = createStore(nameReducer, initial)

export default store