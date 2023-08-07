import { configureStore, createSlice } from "@reduxjs/toolkit";
import addressSlice from "./addressSlice";
const initialCount = {
    count:0
}

const counterSlice = createSlice({
    name:'counterSlice',
    initialState: initialCount,
    reducers:{
        addOne:(state)=>{
            state.count += 1;
        },
        minusOne:(state)=>{
            return {...state, count:state.count - 1}
        },
        reset:()=>{
            return initialCount
        }
    }
})

const store = configureStore({
    reducer: {counter:counterSlice.reducer, address:addressSlice.reducer}
});

export const countActions  = counterSlice.actions

export default store