import { createSlice, configureStore } from "@reduxjs/toolkit";

const initial = {data:[]}

const dataSlice = createSlice({
    name:"dataSlice",
    initialState:initial,
    reducers:{
        getData(state, action){
            state.data = action.payload
            return state
        }
    }
})

const store = configureStore({ reducer: { dataSlice: dataSlice.reducer }})

export const dataActions = dataSlice.actions
export default store 

export const populateData = ()=>{
    return dispatch =>
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res=>res.json())
            .then(result => dispatch(dataActions.getData(result)))
            .catch(console.error)
    }
}