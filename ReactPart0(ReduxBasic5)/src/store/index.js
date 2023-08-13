import {createStore} from 'redux';

const initial = {
    counter : 0,
    toggle:true
}

const counterReducer = (state, action)=>{
    if(action.type === 'add'){
        return {...state, counter: state.counter + 1}
    } else if (action.type === 'minus'){
        return { ...state, counter: state.counter - 1 }
    } else if (action.type === 'increase'){
        return { ...state, counter: state.counter + action.num }
    } else if (action.type === 'toggle'){
        return { ...state, toggle: !state.toggle }
    }else{
        return state
    }
}


const store = createStore(counterReducer, initial);

export default store; 