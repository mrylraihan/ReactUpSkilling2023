import {createSlice, configureStore} from '@reduxjs/toolkit'

const initial = {
    data:[]
}

const dataSlice = createSlice({
    name:'dataSlice',
    initialState:initial,
    reducers:{
        setData:(state,action)=>{
            return {...state, data: action.payload}
    },
    removeData:(state, action)=>{
       let newData =  state.data.filter(ele=>ele.id !== action.payload.id)
        return {...state, data:newData}
    },
}

})

const store = configureStore({reducer: dataSlice.reducer})
export const dataActions = dataSlice.actions 

export const getData = ()=>{
    return  (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(result => dispatch(dataActions.setData(result)))
            .catch(console.error)
    }
}

export default store