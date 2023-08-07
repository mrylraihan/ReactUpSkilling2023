import { createStore } from 'redux'

const initial = {
    count: 0,
    toggle: true
}

const counterReducer = (state, action) => {
    if (action.type === 'increment') {
        return { ...state, count: state.count + 1 }
    } else if (action.type === 'decrement') {
        return { ...state, count: state.count - 1 }
    } else if (action.type === 'increase') {
        return { ...state, count: state.count + action.amount }
    } else if (action.type === 'toggle') {
        return { ...state, toggle: !state.toggle }
    } else {
        return state;
    }
}

const store = createStore(counterReducer, initial)
export default store