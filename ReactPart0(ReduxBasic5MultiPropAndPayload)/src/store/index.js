import {createStore} from 'redux'

const initial = {
    firstName:"",
    lastName:"",
    fullName:"",
    toggle:true
}

const nameReducer = (state, action)=>{
    if(action.type === 'FS'){
        return {...state, firstName:action.firstName}
    }else if(action.type === 'LS'){
        return { ...state, lastName: action.lastName }
    } else if (action.type === 'FN') {
        return {...state, fullName:`${state.firstName} ${state.lastName}`}
    }else if (action.type === 'TG') {
        return {...state, toggle:!state.toggle}
    }else{
        return initial
    }
}

const store = createStore(nameReducer, initial)
export default store