import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Teaching() {
    const nav = useNavigate()
    const params = useParams()
    console.log(params)
  return (
    <div className='app'>
        <h1>Teaching</h1> 
          <button onClick={() => nav('/more')}>Go to more</button>
    </div>
  )
}

export default Teaching