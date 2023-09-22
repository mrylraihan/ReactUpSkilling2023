import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/test1'>test</Link></li>
              <li><Link to='/test2'>test2</Link></li>
              <li><Link to='/test3'>test3</Link></li>
              <li><Link to='/test4'>test4</Link></li>
        </ul>
    </div>
  )
}

export default Navbar