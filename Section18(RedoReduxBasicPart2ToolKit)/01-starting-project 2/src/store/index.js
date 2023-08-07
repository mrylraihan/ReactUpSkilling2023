import {createSlice, configureStore} from '@reduxjs/toolkit'

const initial = {
    count: 0,
    toggle: true
}
const counterSlice = createSlice({
    name:'counterSlice',
    initialState :initial,
    reducers:{
        increment:(state)=>{
            return { ...state, count: state.count + 1 }
    },
    decrement:(state)=>{
        return { ...state, count: state.count - 1 }
    },
    increase :(state,action)=>{
        return { ...state, count: state.count + action.payload }
    },
    toggleCounter:(state)=>{
        return { ...state, toggle: !state.toggle }
    }
}
})

// const counterReducer = (state, action) => {
//     if (action.type === 'increment') {
//         return { ...state, count: state.count + 1 }
//     } else if (action.type === 'decrement') {
//         return { ...state, count: state.count - 1 }
//     } else if (action.type === 'increase') {
//         return { ...state, count: state.count + action.amount }
//     } else if (action.type === 'toggle') {
//         return { ...state, toggle: !state.toggle }
//     } else {
//         return state;
//     }
// }

const store = configureStore({reducer:counterSlice.reducer})
// const store = configureStore({reducer:{countSlice: counterSlice.reducer}}) if we have multiple slices then we would want to map our slices to a key
// const store = createStore(counterReducer, initial)

export const counterActions = counterSlice.actions// will allow us to use the reducer methods for our dispatch 

export default store