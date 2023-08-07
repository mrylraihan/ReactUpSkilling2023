// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'

import counterSlice from './counter'
import authReducers from './auth'


const store = configureStore({reducer:{
        counter:counterSlice.reducer,
    auth: authReducers,
    }})
    

export default store
