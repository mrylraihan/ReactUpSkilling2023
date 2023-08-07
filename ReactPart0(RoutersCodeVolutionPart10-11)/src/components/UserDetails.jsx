import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
function UserDetails() {
    const {name} = useParams()
    const nav = useNavigate()
  return (
    <div className='app'>
          <h3>UserDetails {name}</h3>
          <button onClick={nav.bind(this, -1)}>go back</button>
    </div>
  )
}

export default UserDetails