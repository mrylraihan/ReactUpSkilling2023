import { createSlice } from "@reduxjs/toolkit"

const initial = []

const dataSlice = createSlice({
    name:"nameSlice",
    initialState:initial,
    reducers:{
        getData(state, action){
            // state = action.payload
            // return state
            return [...state,...action.payload]
        },
        removeData(state, action){
            let newArray = state.filter(ele=>ele.id!==action.payload)
            return [...newArray]
        }

    }
})

export const dataReducer = dataSlice.reducer

export const dataAction = dataSlice.actions

export const fetchData = () =>{
    return async (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>dispatch(dataAction.getData(data)))
        .catch(console.error)
    }
}