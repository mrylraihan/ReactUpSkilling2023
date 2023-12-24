import { createSlice } from "@reduxjs/toolkit"

const initial = []

export const testSlice = createSlice({
    name: "testSlice",
    initialState: initial,
    reducers: {
        getData: (state, action) => {
            return action.payload.data
        }
    }

})

export const testActions = testSlice.actions

// export const getTestData =  () =>{
//     return (dispatch) =>{
//         return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res=>res.json())
//             .then(result => dispatch(testActions.getData({ data: result })))
//             .catch(console.error)
         
//     }
// }
export const getTestData = () =>{
    return async (dispatch)=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await res.json()
        return dispatch(testActions.getData({ data: result }))
    }
}