import {configureStore} from '@reduxjs/toolkit'
import nameSlice from './nameSlice'
import toggleSlice from './toggleSlice'


const store = configureStore({reducer:{nameSlice:nameSlice.reducer, toggleSlice:toggleSlice.reducer}})

export default store

export const nameActions = nameSlice.actions
export const toggleActions = toggleSlice.actions