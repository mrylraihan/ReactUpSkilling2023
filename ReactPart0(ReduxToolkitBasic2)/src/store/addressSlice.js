import {createSlice } from "@reduxjs/toolkit";

const initialAddress = {
    address: ''
}

const addressSlice = createSlice({
    name: 'addressSlice',
    initialState: initialAddress,
    reducers: {
        getAddress: (state, action) => {
            return {...state, address:action.payload.addi}
        }
    }
})



export const addressActions = addressSlice.actions

export default addressSlice