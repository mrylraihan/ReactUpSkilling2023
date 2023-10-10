import {createSlice,configureStore} from '@reduxjs/toolkit'


const initial = []

const dataSlice = createSlice({
    name:"dataSlice", 
    initialState:initial,
    reducers:{
        populateData(state, action){
            return [...action.payload]
        },
        removeData(state, action){
            let newData = state.filter(ele=>ele.id!==action.payload)
            return [...newData]
        }
    }
})


const store = configureStore({reducer:{dataSlice: dataSlice.reducer}})
export const dataActions = dataSlice.actions

export const getData = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(result => dispatch(dataActions.populateData(result)))
        .catch(console.error)
    }
}

export const  deleteData = (id) =>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+ id, {
            method:"DELETE"
        })
            .then(res => res.json())
            .then(result => dispatch(dataActions.removeData(id)))
            .then(()=>console.log(id,':resource has been deleted'))
            .catch(console.error)
    }
}


export default store