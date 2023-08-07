import React from 'react'
import {useNavigate, Outlet} from 'react-router-dom'
function People() {
    const nav = useNavigate()
    const peopleList = [1,2,3]
  return (
    <div className='app'>
        <h1>People</h1>
        <ul>
            {peopleList.map(ele=><li onClick={nav.bind(this,`${ele}`)}>Person {ele}</li>)}
        </ul>
        <Outlet/>
    </div>
  )
}

export default People