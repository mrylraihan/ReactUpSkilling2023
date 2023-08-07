import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='app'>
        <h3>Navbar</h3>
        <ul>
              <li> <Link to='/'>Home</Link></li>
              <li><Link to='/createOne'>Create One</Link></li>
              <li><Link to='/createOneRef'>Create One with useRef</Link></li>
              <li><Link to='/showAll'>Create One with Show All</Link></li>
        </ul>
    </div>
  )
}

export default Navbar