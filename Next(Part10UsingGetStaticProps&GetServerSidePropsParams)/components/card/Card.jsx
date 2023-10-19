import { useRouter } from 'next/router'
import React from 'react'

function Card(props) {
  const router = useRouter()

  const sendToPage =()=>{
    router.push(`/blogs/${props.id}`)
  }
  
  return (
    <div className='app'>
      <h3 onClick={sendToPage}>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default Card