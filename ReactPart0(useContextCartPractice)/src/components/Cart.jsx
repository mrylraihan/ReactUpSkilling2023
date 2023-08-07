import React from 'react'
import { useContext } from 'react'
import CartContext from '../store/cart-context'

function Cart() {
    // display cart data from our context
    const ctx = useContext(CartContext)
    console.log('in Cart', ctx.cart);
  return (
    <div>
        <h1>Cart</h1>
        <ul>
            {ctx.cart.length>0 && ctx.cart.map((ele,idx)=><li key={idx}>{ele.name}</li>)}
        </ul>
    </div>
  )
}

export default Cart