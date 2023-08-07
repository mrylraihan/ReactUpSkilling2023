import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <div>
        <h1>Navbar</h1>
        <ul>
              <Link to={'/'}><li>Home</li></Link>
              <Link to={'/about'}><li>About</li></Link>
              <Link to={'/create'}><li>Create</li></Link>
              <Link to={'/showall'}><li>Show All</li></Link>
        </ul>    
    </div>
  )
}

export default Navbar