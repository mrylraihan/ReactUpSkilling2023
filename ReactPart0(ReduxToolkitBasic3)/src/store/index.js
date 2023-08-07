import { configureStore} from '@reduxjs/toolkit'
import toggleReducer from './toggle'



const store = configureStore({reducer:{toggleState : toggleReducer}})

export default store