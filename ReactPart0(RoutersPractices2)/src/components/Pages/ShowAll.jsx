import React from 'react'
import { useNavigate } from 'react-router-dom'

function ShowAll({people}) {
  const nav = useNavigate()
  let content = people.map((ele,idx)=>{
    return <div key={idx}>
      <h4>{ele}</h4>
      <button onClick={nav.bind(this,`${idx}`)}>See more</button>
    </div>
  })
  return (
    <div className='app'>
      <h1>ShowAll</h1>
      {content}
    </div>
  )
}

export default ShowAll