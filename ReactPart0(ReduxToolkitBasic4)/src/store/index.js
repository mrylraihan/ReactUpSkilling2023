import {configureStore} from '@reduxjs/toolkit';
import nameReducers from './FullNameSlice'
import toggleReducer from './ToggleSlice'

const store = configureStore({reducer:{name:nameReducers, toggle:toggleReducer}})

export default store