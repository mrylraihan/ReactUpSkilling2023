import React from 'react'
import { useParams } from 'react-router-dom'
function Person() {
    const idx = useParams().idx
  return (
    <div>Person {idx}</div>
  )
}

export default Person