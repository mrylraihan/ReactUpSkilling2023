import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SeeOne({people}) {
  const params = useParams()
  const idx = params.idx
  const nav = useNavigate()
  const goBack = () => nav(-1)
  return (
    <div className='app'>
      <h3>See One</h3>
      <h4>{people[idx].name}</h4>
      <h4>{idx}</h4>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default SeeOne