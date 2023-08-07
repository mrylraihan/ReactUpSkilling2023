import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({ele}) {
    const nav = useNavigate()
    const goToSinglePage = ()=> nav(`/all/${ele.id}`)
  return (
    <div className='app' key={ele.id}>
        <h3>{ele.title}</h3>
        <p>{ele.body}</p>
        <button onClick={goToSinglePage}>See more!</button>
    </div>
  )
}

export default Card