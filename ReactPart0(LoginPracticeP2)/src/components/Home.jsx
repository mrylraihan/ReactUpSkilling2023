import React from 'react'

function Home({user, setUser}) {
  return (
    <div>
          <h1>Welcome Home {user.userName}</h1>
          <button onClick={()=>setUser('')}>LogOut</button>
    </div>
  )
}

export default Home