import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='app'>
        <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/all'><li>See All</li></Link>
              <Link to='/add'><li>Add</li></Link>
              <Link to='/about'><li>About</li></Link>
              <Link to='/extra'><li>Extras</li></Link>
        </ul>
    </div>
  )
}

export default Navbar