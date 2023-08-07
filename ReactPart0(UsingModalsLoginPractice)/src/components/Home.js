import React from 'react'

function Home({user, setUser}) {
    const logout = ()=> setUser('')
  return (
    <div className='app'>
        <h1>Home</h1>
          <h1>Welcome: {user.username}</h1>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home