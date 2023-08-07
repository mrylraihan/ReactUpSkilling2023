import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ShowOne({people}) {
  const params = useParams()
  const idx = params.idx
  const nav = useNavigate()
  const [person, setPerson] = useState('')

  useEffect(()=>{
    setPerson(people.find((ele, id) => id === +idx))
  },[])

  let personNoState = people.find((ele,id)=>id === +idx)
  return (
    <div className='app'>
      <h1>Show One</h1>
        <h3>{people[idx]}, with the array</h3>
        <h3>{personNoState}, without state </h3>
        <h3>{person}, with state </h3>
      <button onClick={nav.bind(this,-1)}>Go back</button>
      <button onClick={nav.bind(this,'/')}>Go Home</button>
    </div>
  )
}

export default ShowOne