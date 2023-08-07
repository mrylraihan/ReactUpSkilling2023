import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function Products() {
  return (
    <div className='app'>
          <h1>Products</h1>
          <ol>
            <li><Link to='new'> new </Link></li>
            <li><Link to='featured'> featured </Link></li>
            <Outlet/>
          </ol>
    </div>
  )
}

export default Products