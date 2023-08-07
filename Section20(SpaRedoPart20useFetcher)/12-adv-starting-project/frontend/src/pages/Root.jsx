import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
function RootLayout() {
  // const navigate = useNavigation()
 
  return (
    <div>
        <MainNavigation/>
      {/* {navigate.state === 'loading'&& <p>..Loading</p>} */}
        <Outlet/>
    </div>
  )
}

export default RootLayout