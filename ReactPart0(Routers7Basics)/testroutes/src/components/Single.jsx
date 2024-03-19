import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Single() {
    const params = useParams();
    const id = params.id;
    const nav = useNavigate();

  return (
    <div className='app'>
      <h2>{id}</h2>
      <button onClick={nav.bind(this, -1)}>go back</button>
    </div>
  )
}

export default Single
