import React, { useContext, useState } from 'react'
import CartContext from '../store/cart-context'

function CreateProduct() {
    const ctx = useContext(CartContext)
    const [product, setProduct] = useState('')
    const getProduct = e =>{
        setProduct(e.target.value)
    }

    // will add product to the context product value array 
    const onSubmitHandler = e =>{
        e.preventDefault()
        ctx.setProducts(prev=>{
            return [...prev,{name:product}]
        })
        setProduct('')
    }
    // console.log(ctx.products);
  return (
    <div>
          <h1>CreateProduct</h1>
          <form onSubmit={onSubmitHandler}>
            <div>
                <label>
                    product name:
                    <input type="text" value={product} onChange={getProduct}/>
                </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default CreateProduct