import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        items:[],
        totalQuantity:0,
        totalPrice:0
    },
    reducers:{
        addItemToCart(state, action){
            const newItem = action.payload;
            // console.log(state.items)
            const existingItem = state.items.find(item=>item.id === newItem.id)
            // console.log(existingItem)
            const editItem = {
                id: newItem.id,
                price: newItem.price,
                quantity:1,
                totalPrice:newItem.price,
                name:newItem.title
            }

            if(!existingItem){
                // state.items.push(editItem);
                // state.totalQuantity = state.totalQuantity +1;
                return { ...state, items: [...state.items, editItem], totalQuantity: state.totalQuantity + 1, totalPrice : state.totalPrice + editItem.price}
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price
                state.totalQuantity = state.totalQuantity + 1
                state.totalPrice = state.totalPrice + editItem.price
                // return { ...state, totalQuantity: state.totalQuantity + 1, totalPrice:state.totalPrice+editItem.price }
            }
        },
        removeItemToCart(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item=>item.id === id)
            state.totalQuantity--;
            if(existingItem.quantity === 1){
            state.totalPrice = state.totalPrice - existingItem.price
            state.items = state.items.filter(item=>item.id !== id)
            }else{
                existingItem.quantity--;
                state.totalPrice = state.totalPrice - existingItem.price
            }
        }
    }
})

export const sendCartData = cart =>{
    return  dispatch =>{
        dispatch(uiActions.showNotification({ status: 'pending', title: 'Sending...', message: 'Sending Cart data!' }))

        return fetch('https://testdata-7fb43-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify(cart)
        })
            .then(res => console.log(res))
            .then(() => dispatch(uiActions.showNotification({ status: 'success', title: 'Success...', message: 'Got Cart data!' })))
            .catch(() => dispatch(uiActions.showNotification({ status: 'error', title: 'Error...', message: 'Error on Cart data!' })))
    }
}

export const cartActions = cartSlice.actions

export default cartSlice