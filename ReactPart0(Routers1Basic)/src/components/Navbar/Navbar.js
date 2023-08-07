import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='app'>
          <h1>Navbar</h1>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/ShowAll'><li>ShowAll</li></Link>
            <Link to='/About'><li>About</li></Link>
          </ul>
    </div>
  )
}

export default Navbar