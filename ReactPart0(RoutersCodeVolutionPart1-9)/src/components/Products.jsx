import React from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/@types/react'
import {Link, Outlet} from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/react-router-dom/dist'
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