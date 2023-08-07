import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ShowOne(props) {
  const [post, setPost] = useState('')
  const params = useParams()
  const id = params.id
  console.log(id)
  const nav = useNavigate()

  useEffect(() => {
    const data = props.post.find(ele => ele.id == id)
    setPost(data)

  }, [id])
  const deleteHandler = () => {
    console.log(id)
    props.dispatch({ type: "Delete", id: id })
    nav('/show')
  }

  return (
    <div className='app'>
      <h2>Show One Page!</h2>
      {post && <h3>{post.title}</h3>}
      {post && <p>{post.body}</p>}
      <button onClick={nav.bind(this, -1)}>Go back</button>
      <button onClick={nav.bind(this, `edit`)}>Edit Post</button>
      <button onClick={deleteHandler}>Delete</button>
      <div></div>
    </div>

  )
}

export default ShowOne