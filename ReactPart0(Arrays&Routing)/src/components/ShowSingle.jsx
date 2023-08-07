import React from 'react'
import {useParams} from 'react-router-dom'
function ShowSingle({people}) {
    const idx = useParams().idx
    console.log(idx)
  return (
    <div className='app'>
          <h1>ShowSingle</h1>
          <h2>{people[idx].name}</h2>
    </div>
  )
}

export default ShowSingle