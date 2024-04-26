import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar'
function Roots() {
  return (
    <div>
        <Navbar/>
        {/* <>{Outlet}</> */}
        <Outlet/>
    </div>
  )
}

export default Roots