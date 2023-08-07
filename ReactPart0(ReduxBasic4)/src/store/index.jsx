import {createStore} from 'redux'

const initial = {
    toggle: false,
    count: 0    
}

const testReducer = (state, action)=>{
    if(action.type === "toggle"){
        return {...state,toggle:!state.toggle}
    } else if (action.type === "plus"){
        return { ...state, count: state.count + 1 }
    } else if (action.type === "minus"){
        return { ...state, count: state.count - 1 }
    }else{
        return state
    }
}
const store = createStore(testReducer, initial)

export default store