import React from 'react'
import { useParams } from 'react-router-dom'
function Person() {
    const idx = useParams().idx
  return (
    <div className='app'>Person {idx}</div>
  )
}

export default Person