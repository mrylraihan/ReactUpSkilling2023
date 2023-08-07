import React from 'react'

function Cart(props) {
  return (
    <div className='app'>
        <h1>Cart {props.quantity}</h1>
    </div>
  )
}

export default Cart