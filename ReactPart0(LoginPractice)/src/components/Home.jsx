import React from 'react'

function Home(props) {
  return (
    <div>
          <h4>Home</h4>
          <button onClick={()=>props.setLogin(false)}>Log out</button>
    </div>
  )
}

export default Home