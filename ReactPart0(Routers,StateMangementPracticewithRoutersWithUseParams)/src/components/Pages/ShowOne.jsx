import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
function ShowOne({people}) {
  const idx = useParams().idx
  const nav = useNavigate()
  return (
    <div className='app'>
      <h3>ShowOne</h3>
      {idx && <h4>{people[idx]}</h4>}
      <button onClick={nav.bind(this, -1)}>go back</button>
    </div>
  )
}

export default ShowOne