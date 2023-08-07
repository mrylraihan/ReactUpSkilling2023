import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='app'>
        <h1>NavBar</h1>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/all'>all</Link></li>
            <li><Link to='/extra'>extra</Link></li>
            <li><Link to='/extra/about'>about</Link></li>
            
        </ul>
    </div>
  )
}

export default Navbar