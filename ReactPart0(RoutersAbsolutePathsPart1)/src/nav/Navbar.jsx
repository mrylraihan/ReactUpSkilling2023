import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='app'>
          <h1>Navbar</h1>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/test'>Test</Link>
            <Link to='/people'>People</Link>
          </ul>
    </div>
  )
}

export default Navbar