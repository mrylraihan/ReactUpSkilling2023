import { uiActions } from "./ui-slice"
import { cartActions } from './cart-slice'
export const sendCartData = cart => {
    return dispatch => {
        dispatch(uiActions.showNotification({ status: 'pending', title: 'Sending...', message: 'Sending Cart data!' }))

        return fetch('https://testdata-7fb43-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify(cart)
        })
            // .then(res => console.log(res))
            .then(() => dispatch(uiActions.showNotification({ status: 'success', title: 'Success...', message: 'Got Cart data!' })))
            .catch(() => dispatch(uiActions.showNotification({ status: 'error', title: 'Error...', message: 'Error on Cart data!' })))
    }
}

export const fetchCartData = ()=>{
    return dispatch => {
       
        return fetch('https://testdata-7fb43-default-rtdb.firebaseio.com/cart.json')
            .then(res=>res.json())
            .then(result =>{ 
                console.log("result:",  result)
                dispatch(cartActions.replaceCart({
                items: result.items || [], totalQuantity: result.totalQuantity
            }))
        
        })
            .then(() => dispatch(uiActions.showNotification({ status: 'success', title: 'Success...', message: 'Got Cart data!' })))
            .catch(() => dispatch(uiActions.showNotification({ status: 'error', title: 'Error...', message: 'Error on Cart data!' })))
    }
}
