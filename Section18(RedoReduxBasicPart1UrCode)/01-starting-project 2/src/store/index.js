import {createStore} from 'redux';

const initial = {
    count:0,
    toggle:true
}

const stateReducer  = (state, action)=>{
    if(action.type === 'toggle'){
        return {...state, toggle: !state.toggle}
    }else if(action.type === 'add'){
        return { ...state, count: state.count + 1}
    }else if(action.type === 'minus'){
        return { ...state, count: state.count - 1}
    }else{
        return state
    }
}
const store = createStore(stateReducer, initial);

export default store;