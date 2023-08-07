import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
          <h1>Navbar</h1>
          <ul>
            <Link to='/'><li>home</li></Link>
            <Link to='/show'><li>show</li></Link>
            <Link to='/add'><li>add</li></Link>
          </ul>
    </div>
  )
}

export default Navbar