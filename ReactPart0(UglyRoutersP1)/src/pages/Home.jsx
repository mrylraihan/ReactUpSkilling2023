import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
    const nav = useNavigate()
  return (
    <div className='app'>
          <h1>Home</h1>
          <button onClick={nav.bind(this, 'about')}>Go to About</button>
    </div>
  )
}

export default Home