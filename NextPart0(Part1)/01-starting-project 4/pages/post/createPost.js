import React, { useRef } from 'react'
import {useRouter} from 'next/router'
function createPost(props) {
  const titleRef = useRef()
  const bodyRef = useRef()
  const router = useRouter()
  const onSubmitHandler = (e)=>{
    e.preventDefault()
    props.setPost(prev=>{
      return [...prev, {
        userId: 1,
        id: prev.length + 1,
        title: titleRef.current.value,
        body: bodyRef.current.value
      }] 
    })
    titleRef.current.value = ''
    bodyRef.current.value = ''
    router.back()
  }
  return (
    <div className='app'>
      <form onSubmit={onSubmitHandler} >
        <div>
          <label>Title:
          <input type="text" ref={titleRef}/>
          </label>
        </div>
        <div>
          <label>Body:
          <input type="text" ref={bodyRef}/>
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <button onClick={router.back}>Go back to Post</button>
    </div>
  )
}

export default createPost