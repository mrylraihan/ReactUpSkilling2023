import React, { useRef } from 'react'

function AddOne({ dispatch }) {
  const titleRef = useRef()
  const bodyRef = useRef()

  const submitHandler = e =>{
    e.preventDefault()
    const title = titleRef.current.value
    const body = bodyRef.current.value
    console.log(titleRef.current.value)
    console.log(bodyRef.current.value)
    dispatch({type:"Add",data:{title, body}})
  }
  return (
    <div className='app'>
      <h1>AddOne</h1>
      <form onSubmit={submitHandler}>
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
    </div>
  )
}

export default AddOne