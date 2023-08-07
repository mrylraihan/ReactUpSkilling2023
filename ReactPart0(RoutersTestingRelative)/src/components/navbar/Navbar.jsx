import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='app'>
          Navbar
          <ul>
            <Link to='/home'><li>home</li></Link>
              <Link to='/home/about'><li>about</li></Link>
              <Link to='/home/test'><li>test</li></Link>
          </ul>
    </div>
  )
}

export default Navbar