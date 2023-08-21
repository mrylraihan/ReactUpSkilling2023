import { createSlice } from '@reduxjs/toolkit'

const initial = {
    data: []
}

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState: initial,
    reducers: {
        getData(state, action) {
            // state.data = action.payload
            return { ...state, data: action.payload }
        },
        removeData(state, action) {
            let newData = state.data.filter(ele => ele.id !== action.payload)
            return { ...state, data: newData }
        }

    }
})
export default dataSlice

export const dataActions = dataSlice.actions

export const getDataHandler = ()=>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            //  .then(setData)
            .then(result => dispatch(dataActions.getData(result)))
            .catch(console.error)
    }
}