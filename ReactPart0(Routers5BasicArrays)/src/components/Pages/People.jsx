import React from 'react'
import {useParams} from 'react-router-dom'
function People() {
    const id = useParams().id

  return (
    <div className='app'>People {id}</div>
  )
}

export default People