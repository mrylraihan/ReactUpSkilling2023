import { createStore } from 'redux'

const initial = {
    count :0,
    address:'somewhere along the rainbow',
    arr:[1,2,3],
    fetchData:''
}

const countReducer = (state, action)=>{
if(action.type == 'incre'){
    return {...state, count: state.count + 1}
}else if(action.type == 'decre'){
    return { ...state, count: state.count - 1 }
} else if (action.type == 'fetch') {
    return { ...state, fetchData: action.data }
}
else{
    return initial
}
}

            // useReducer Hook takes 2 args , 
            //1. reducer function 
            //2. initial state 
const store = createStore(countReducer, initial)

export default store