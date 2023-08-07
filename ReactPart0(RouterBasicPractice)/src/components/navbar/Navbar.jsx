import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
          <h1>Navbar</h1>
          <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/all'><li>See All</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/more'><li>More</li></Link>
          </ul>
    </div>
  )
}

export default Navbar