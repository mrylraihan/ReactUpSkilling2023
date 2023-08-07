import { configureStore, createSlice } from '@reduxjs/toolkit'
const initial = {
    name:''
}

const nameSlice = createSlice({
    name:"nameSlice",
    initialState:initial,
    reducers:{
        setName:(state, action)=>{
            return {...state, name:action.payload}
        }
    }

})


export const nameActions = nameSlice.actions



const store = configureStore({ reducer: nameSlice.reducer })
export default store