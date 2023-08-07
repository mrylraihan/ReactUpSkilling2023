import {createStore} from 'redux'
const initial = {counter:0}

const counterReducer = (state, action)=>{
    if(action.type == 'increment'){
        return {counter:state.counter + 1}
    }else if(action.type == 'decrement'){
        return { counter: state.counter - 1 }
    }else{
        return state
    }
}

const store = createStore(counterReducer, initial)

export default store