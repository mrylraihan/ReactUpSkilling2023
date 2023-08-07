import React, { useContext } from 'react'
import CartContext from '../store/cart-context'

function Products() {
    const ctx = useContext(CartContext)

    // will add product to the cart if it has not been added already
    const addToCart =(product)=>{
        if (!ctx.cart.find(ele => ele.name == product.name)) //if this return undefined then it will add to cart 
            ctx.setCart(prev=>{
                return [...prev, product]
            })
    }
console.log('in products', ctx.products);
  return (
    <div>
          <h1>Products</h1>
          <ul>
              {ctx.products.map((ele) => <div key={ele.name}><li>{ele.name}</li><button onClick={addToCart.bind(this,ele)}>Add to Cart</button></div>)}
          </ul>
    </div>
  )
}

export default Products