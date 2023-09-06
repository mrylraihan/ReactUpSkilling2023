import React, { useRef } from 'react'
import axios from 'axios'
function PostAxios(props) {
  const titleRef = useRef()
  const bodyRef = useRef()

  const addToList = ele => {
    props.setList(prev => [...prev, ele])
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    let title = titleRef.current.value
    let body = bodyRef.current.value
    titleRef.current.value = ''
    bodyRef.current.value = ''
    console.log(title)
    console.log(body)
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title,
        body,
        userId: 1,
      })
      .then(res => res.data)
      .then(addToList)
      .catch(console.error)
  }

  return (
    <div className='app'>
      <h1>PostAxios</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>title:
            <input type='text' ref={titleRef} />
          </label>
        </div>
        <div>
          <label>body:
            <input type='text' ref={bodyRef} />
          </label>
        </div>
        <button>submit</button>
      </form>
    </div>
  )
}

export default PostAxios