import React from 'react'
import {useNavigate} from 'react-router-dom'
function ShowAll({people}) {
  const nav = useNavigate()
  
  return (
    <div className='app'>
      <h1>ShowAll</h1>
      <ul>
        {people.map((ele, idx) => <li key={idx} onClick={nav.bind(this,`${idx}`)}>{ele}</li>)}
      </ul>
    </div>
  )
}

export default ShowAll