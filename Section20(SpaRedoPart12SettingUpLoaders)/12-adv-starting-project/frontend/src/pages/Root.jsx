import React from 'react'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
function Root() {
  const navigate = useNavigation()
 
  return (
    <div>
        <MainNavigation/>
      {navigate.state === 'loading'&& <p>..Loading</p>}
        <Outlet/>
    </div>
  )
}

export default Root