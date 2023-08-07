import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='app'>
        <h2>nav</h2>
        <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
        </ul>
    </div>
  )
}

export default Navbar