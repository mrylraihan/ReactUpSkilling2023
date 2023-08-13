
import {configureStore} from '@reduxjs/toolkit'
import toggleSlice from './toggle-slice'
import counterSlice from './counter-slice';





const store = configureStore({ reducer: { counterSlice: counterSlice.reducer, toggleSlice: toggleSlice.reducer}});

export const counterActions = counterSlice.actions
export const toggleActions = toggleSlice.actions

export default store; 
