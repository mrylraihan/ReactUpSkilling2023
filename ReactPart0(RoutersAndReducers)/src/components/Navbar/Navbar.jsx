import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/show'><li>Show All</li></Link>
                <Link to='/add'><li>Add One</li></Link>
                <Link to='/about'><li>About</li></Link>
            </ul>
        </div>
    )
}

export default Navbar