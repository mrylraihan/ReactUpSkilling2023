import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggle'
import nameReducer from './name'

const store = configureStore({reducer:{toggleState:toggleReducer, nameState:nameReducer}})
export default store