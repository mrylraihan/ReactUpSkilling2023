import Link from 'next/link'
import React from 'react'


function Card({ele}) {
  return (
    <div className='app' key={ele.id}>
        <h3>{ele.title}</h3>
        <p>{ele.body}</p>
      <button><Link href={`/post/${ele.id}`}>See more!</Link></button>
    </div>
  )
}

export default Card