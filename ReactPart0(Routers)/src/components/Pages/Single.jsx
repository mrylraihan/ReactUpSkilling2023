import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Single({people}) {
    const params = useParams()
    const id = params.cat
    const nav = useNavigate()
  return (
      <div className='app'>
          <h1>Single {id}</h1>
          {people.length>0 && <h1>Person is {people[id].title}</h1>}
          {/* <button onClick={nav.bind(this, -1)}>Go back</button> */}
          <button onClick={()=>nav(-1)}>Go back</button>
          <button onClick={()=>nav('/About')}>About</button>
      </div>
  )
}

export default Single