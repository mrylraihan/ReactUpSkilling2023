import React from 'react'

function Card(props) {
  return (
      <div className='app'>
        <h1>{props.ele.title}</h1>
        <p>{props.ele.body}</p>
        <button onClick={props.removeHandler.bind(this,props.ele.id)} >remove</button>
    </div>
  )
}

export default Card