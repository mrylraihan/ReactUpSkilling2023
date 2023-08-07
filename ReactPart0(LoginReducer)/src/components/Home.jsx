import React from 'react'

function Home(props) {
  return (
    <div>
          <h4>Welcome Home {props.state.user.username}</h4>
          <button onClick={()=>props.dispatch({type:'login',login:false})}>Log out</button>
    </div>
  )
}

export default Home