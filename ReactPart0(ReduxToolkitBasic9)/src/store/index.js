import {configureStore} from '@reduxjs/toolkit'
import { nameReducer } from './nameSlice';
import { dataReducer } from './dataSlice';


const store = configureStore({ reducer: {nameSlice: nameReducer, dataSlice:dataReducer}})


export default store;
