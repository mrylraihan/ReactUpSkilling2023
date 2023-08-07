import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <Link to='/home?mode=home'>Home</Link>
    </div>
  )
}

export default Navbar