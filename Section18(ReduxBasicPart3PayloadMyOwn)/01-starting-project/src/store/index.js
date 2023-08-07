import {createStore} from 'redux'
const initial = {counter:0}

const counterReducer = (state, action)=>{
    if(action.type == 'increment'){
        return { counter: state.counter + action.num}
    }else if(action.type == 'decrement'){
        return { counter: state.counter - action.num }
    }else{
        return state
    }
}

const store = createStore(counterReducer, initial)

export default store