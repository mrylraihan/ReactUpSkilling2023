import React from 'react'
import {useParams, Link} from 'react-router-dom'
function ProductsDetail() {
  const num = useParams().num
  return (
    <div>
      <h1>ProductsDetail</h1>
      <p>the product is { num }</p>
      {/* <Link to='/products'><button>go back</button></Link> */}
      <Link to='..' relative='path'><button>go back</button></Link>
      {/* This is like using -1 in useNavigate()it takes you back 1 level */}
      {/* instead of using useNavigate im using a Link just to test */}
    </div>
  )
}

export default ProductsDetail