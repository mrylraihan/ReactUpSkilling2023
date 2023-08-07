import {createStore} from 'redux'

const initial = {
    counter:0
}

const counterReducer = (state , action)=>{
    if(action.type ==='add'){
        return { ...state, counter: state.counter + 1 }
    }else if(action.type === 'minus'){
        return { ...state, counter: state.counter - 1 }
    }else{
        return state
    }
}

const store = createStore(counterReducer, initial)

export default store