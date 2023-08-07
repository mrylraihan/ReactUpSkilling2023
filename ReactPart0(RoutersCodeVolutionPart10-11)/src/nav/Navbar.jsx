import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const navLinkStyles = (a) => {
    // const navLinkStyles = ({isActive}) => {
        console.log(a.isActive)
        console.log(a)
        console.log(a.id)// this will be undefined this isnt the same as a event object this is a special property /obj from the Navlink tag
        return {
            fontWeight: a.isActive ? 'bold' : 'normal',
            textDecoration: a.isActive ? 'none' : 'underline'
        }
    }
    return (
        <nav>
            <NavLink style={navLinkStyles} id='test'to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/test'>Test</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='/users'>Users</NavLink>
        </nav>
    )
}

export default Navbar