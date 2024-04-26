import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
   <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/more" className="nav-link">More</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar