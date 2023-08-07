// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialCounterState = {counter:0, toggle:true}

const counterSlice = createSlice({
name:'counterSlice',
initialState: initialCounterState,
reducers:{
    increment(state){
        // state.counter++ you can do this with redux ToolKit
        return { ...state, counter: state.counter + 1 }
    },
    decrement(state){
        //state.counter--
        return { ...state, counter: state.counter - 1 }
    },
    increase(state, action){
        // state.counter = state.counter + action.amount
        // any value we pass in will be stored in a extra field called payload 
        return { ...state, counter: state.counter + action.payload }//this is because when i call the function i pass my data as a single value, .increase(10) if i passed in an object like increase({amount:10}), the i would access the amount key from the payload like action.payload.amount
    },
    toggleCounter(state){
        // state.toggle = !state.toggle
        return { ...state, toggle: !state.toggle }
    }
}
})

const initialAuthState = {isAuthenticated:false}
const authSlice = createSlice({
    name:'authenticationSlice',
    initialState:initialAuthState,
    reducers:{
        login(state){
            // state.isAuthenticated = true;
            return {...state, isAuthenticated : true}
        },
        logout(state){
            // state.isAuthenticated = false;
            return { ...state, isAuthenticated: false }
        }
    }
})

const store = configureStore({reducer:{
        counter:counterSlice.reducer,
    auth: authSlice.reducer,
    }})
    

export const counterActions = counterSlice.actions 
export const authActions = authSlice.actions
export default store
