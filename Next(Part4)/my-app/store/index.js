import { createSlice, configureStore } from "@reduxjs/toolkit";

const initial = {data:[]}

const dataSlice = createSlice({
    name:"dataSlice",
    initialState:initial,
    reducers:{
        getData(state, action){
            state.data = action.payload
            return state
        },
        deleteData(state, action){
            state.data = state.data.filter((item) => item.id !== action.payload)
            return state
        }
    }
})

const store = configureStore({ reducer: { dataSlice: dataSlice.reducer }})

export const dataActions = dataSlice.actions
export default store 


export const giveMeData = ()=>{
    return async (dispatch)=>{

        let data = await fetch('https://jsonplaceholder.typicode.com/posts')
        data = await data.json()
        dispatch(dataActions.getData(data))
    }
}
