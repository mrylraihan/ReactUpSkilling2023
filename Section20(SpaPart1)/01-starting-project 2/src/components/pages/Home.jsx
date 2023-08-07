import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='app'>
        <h1>The Home Page</h1>
        
            <p>
               Go to the <Link to='/about'>about</Link> page</p>
            <p>
               Go to the <Link to='/more'>more</Link> page</p>
           
    </div>
  )
}

export default Home