import React from 'react'
import {useNavigate, Outlet, useSearchParams} from 'react-router-dom'
function UsersOutlet() {
    const userList = ['Meshia', 'Mike', 'Taylor']
    const nav = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div className='app'>
        <h3>Users</h3>
        <ul>
            {userList.map((ele,idx)=><li key={idx} onClick={nav.bind(this, `${ele}`)}>{ele}</li>)}
        </ul>
        <Outlet/>
        <button onClick={()=>setSearchParams({filter:'active'})}>Active users</button>
        <button onClick={()=>setSearchParams({})}>Reset users</button>
        {showActiveUsers ? <h2>showing active users</h2> : <h2>Showing all users</h2>}
    </div>
  )
}

export default UsersOutlet