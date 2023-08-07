import { createSlice } from '@reduxjs/toolkit'

const toggleSlice = createSlice({
    name: 'toggleSlice',
    initialState: { toggle: true },
    reducers: {
        toggleCounter: (state) => {
            return { ...state, toggle: !state.toggle }
        }
    }
})


// export const toggleActions = toggleSlice.actions// will allow us to use the reducer methods for our dispatch 

export default toggleSlice;