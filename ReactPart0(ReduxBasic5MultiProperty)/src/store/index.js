import {createStore} from 'redux'

const initial = {
    count:0,
    toggle:true
}

const countReducer = (state , action)=>{
    if(action.type ==='add'){
        return { ...state, count: state.count + 1 }
    }else if(action.type === 'minus'){
        return { ...state, count: state.count - 1 }
    }else if(action.type === 'toggle'){
        return {...state, toggle: !state.toggle}
    }else{
        return initial
    }
}

const store = createStore(countReducer, initial)

export default store