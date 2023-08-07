import {createStore} from 'redux'

const initial ={
    firstName:'',
    lastName:'',
    fullName:''
}

const counterName = (state, action)=>{
    if(action.type === 'fn'){
        return {...state, firstName: action.firstName}
    } else if (action.type === 'ln'){
        return { ...state, lastName: action.lastName }
    } else if (action.type === 'fl') {
        return { ...state, fullname:`${state.firstName} ${state.lastName}`,lastName: '', firstName:'' }
    }else{
        return initial
    }
}

const store = createStore(counterName, initial)

export default store