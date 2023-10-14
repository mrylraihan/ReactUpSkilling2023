import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const params = useParams()
    const planId = params.id
    console.log(params)
  return (
    <div className='app'>
        <h1>Details {planId}</h1>
    </div>
  )
}

export default Details