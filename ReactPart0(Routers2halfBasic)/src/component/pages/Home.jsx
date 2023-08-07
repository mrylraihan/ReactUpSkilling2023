import React from 'react'
import {Outlet} from 'react-router-dom'
function Home() {
  return (
    <div className='app'>
      <h1>Home</h1>
      <Outlet/>
    </div>
  )
}

export default Home