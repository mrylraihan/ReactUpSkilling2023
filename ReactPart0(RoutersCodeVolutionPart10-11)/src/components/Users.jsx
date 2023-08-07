import React from 'react'
import {useNavigate} from 'react-router-dom'
function Users() {
    const userList = ['Meshia', 'Mike', 'Taylor']
    const nav = useNavigate()
  return (
    <div className='app'>
        <h3>Users</h3>
        <ul>
            {userList.map((ele,idx)=><li key={idx} onClick={nav.bind(this, `${ele}`)}>{ele}</li>)}
        </ul>
    </div>
  )
}

export default Users