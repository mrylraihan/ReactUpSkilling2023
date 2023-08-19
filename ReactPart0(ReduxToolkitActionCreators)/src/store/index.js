import { createSlice, configureStore } from '@reduxjs/toolkit'

const initial = {
    data:[]
}

const dataSlice = createSlice({
    name:'dataSlice',
    initialState:initial,
    reducers:{
    getData(state, action){
        state.data=action.payload;
        return state
    },
    removeData(state, action){
        state.data = state.data.filter(ele=>ele.id !== action.payload.id)
        return state
    }
    }
})
const store = configureStore({reducer:dataSlice.reducer})

export const getDataAction = ()=>{
    return dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(result => dispatch(dataActions.getData(result)))
            .catch(console.error)
    }
}
export const deleteDataAction = (post)=>{
    return dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+post.id, {method:'Delete'})
            .then(res => res.json())
            .then(result => dispatch(dataActions.removeData(post)))
            .then(console.log(`Post with id:${post.id} was successfully deleted`))
            .catch(console.error)
    }
}


export const dataActions = dataSlice.actions

export default store