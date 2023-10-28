import { useRouter } from 'next/router'
import React from 'react'

function Card(props) {
    const router = useRouter()
    console.log(props)
    const navTo = ()=>router.push(`people/${props.id}`)
  return (
    <div className='app'>
        <h1>{props.name}</h1>
        <p>{props.username}</p>
        <p>{props.email}</p>
          <p>{props.phone}</p>
          <button onClick={navTo}>see more</button>
    </div>
  )
}

export default Card