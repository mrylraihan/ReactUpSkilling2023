import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Navbar() {
  // you can use either link or navLink, link is treated link a tag 
  // navLink give you alittle more data like the isActive attribute 
  return (
    <div>
      <ul>
        <NavLink to='/' className={({isActive})=>console.log(isActive, "Home")}><li>Home</li></NavLink>
        <NavLink to='/extra' className={({ isActive }) => console.log(isActive, "Extra")}><li>Extra</li></NavLink>
        <NavLink to='/all' className={({ isActive }) => console.log(isActive, "SeePost")}><li>See Post</li></NavLink>
        <NavLink to='/add' className={({ isActive }) => console.log(isActive, "Add")}><li>Add</li></NavLink>
        {/* <Link to='/'><li>Home</li></Link>
        <Link to='/extra'><li>Extra</li></Link>
        <Link to='/all'><li>See Post</li></Link>
        <Link to='/add'><li>Add</li></Link> */}
      </ul>
    </div>
  )
}

export default Navbar