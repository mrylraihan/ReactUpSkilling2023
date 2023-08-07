import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: "",
    lastName: "",
    fullName: ""
}
const nameSlice = createSlice({
    name: 'nameSlice',
    initialState: initialState,
    reducers: {
        getFirstName: (state, action) => {
            return { ...state, firstName: action.payload }
        },
        getLastName: (state, action) => {
            return { ...state, lastName: action.payload }
        },
        getFullName: (state) => {
            return { ...state, fullName: `${state.firstName} ${state.lastName}`, firstName: '', lastName: '' }
        }
    }
})



export default nameSlice
