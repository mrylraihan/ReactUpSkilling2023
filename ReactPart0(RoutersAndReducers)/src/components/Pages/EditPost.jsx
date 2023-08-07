import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost({dispatch}) {
  const nav = useNavigate()
  const params = useParams()
  const id = params.id
  const titleRef = useRef()
  const bodyRef = useRef()

  const submitHandler = e => {
    e.preventDefault()
    const title = titleRef.current.value
    const body = bodyRef.current.value
    console.log(titleRef.current.value)
    console.log(bodyRef.current.value)
    dispatch({ type: "Edit", data: { title, body, id} })
    nav(-1)
  }


  return (
    <div className='app'>
      <h1>EditPost with id: {id}</h1>
      <button onClick={nav.bind(this, -1)}>Go back</button>
      
      <div>
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
          <button>Submit Changes!</button>
        </form>
      </div>

    </div>
  )
}

export default EditPost