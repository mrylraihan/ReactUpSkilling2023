import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SinglePost(props) {
  const [post, setPost] = useState('')
  const {id} = useParams()
  const nav = useNavigate()
  useEffect(()=>{
    const single = props.list.find(ele=>ele._id == id)
    setPost(single)
  },[])

  return (
    <div className='app'>
      <h1>SinglePost</h1>
      {post && <h4>{post.title}</h4>}
      {post && <p>{post.body}</p>}
      <button onClick={nav.bind(this, -1)}>Go Back</button>
    </div>
  )
}

export default SinglePost